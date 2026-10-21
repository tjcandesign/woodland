/**
 * Build the Woodland Estate & Title Word letterhead.
 *
 * Writes letterhead/woodland-letterhead.dotx (Word template: double-click
 * opens a new untitled letter) and .docx (plain document), and copies both
 * into public/assets/templates/ for the /brand download links.
 *
 * Page one: centered stacked logo, contact line in the footer.
 * Later pages: small circle mark at the top, page number at the bottom.
 *
 * Needs the docx package, which isn't a site dependency:
 *   npm i --no-save docx@9 && node letterhead/build-letterhead.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const JSZip = require('jszip');
const {
  Document, Packer, Paragraph, TextRun, ImageRun, Header, Footer,
  AlignmentType, PageNumber, BorderStyle,
} = require('docx');

const ROOT = path.resolve(__dirname, '..');
const ASSETS = path.join(ROOT, 'public/assets');
const OUT_DIR = __dirname;
const PUBLIC_DIR = path.join(ASSETS, 'templates');

const FONT = 'Georgia';
const INK = '2B2622';     // body text, a warm near-black
const SOFT = '7D7568';    // --text-soft
const RULE = 'C2B8A1';    // --border-strong

const DPI = 300;
const inch = (n) => Math.round(n * 1440);   // DXA
const px = (n) => Math.round(n * 96);       // docx-js ImageRun sizes are 96-dpi px

async function raster(svgFile, widthIn) {
  const svg = fs.readFileSync(path.join(ASSETS, svgFile));
  return sharp(svg, { density: 1200 })
    .resize({ width: Math.round(widthIn * DPI) })
    .png()
    .toBuffer();
}

const run = (text, opts = {}) => new TextRun({ text, font: FONT, color: INK, ...opts });
const para = (children, opts = {}) =>
  new Paragraph({ children: Array.isArray(children) ? children : [children], ...opts });

async function main() {
  const LOGO_W = 2.3;                       // inches
  const LOGO_H = LOGO_W * (62.82 / 275.55); // stacked logo viewBox ratio
  const MARK_W = 0.42;
  const MARK_H = MARK_W * (89.49 / 88.26);

  const logo = await raster('woodland-stacked-dark.svg', LOGO_W);
  const mark = await raster('circle-dark.svg', MARK_W);

  const contact = (text) => run(text, { size: 15, color: SOFT, characterSpacing: 10 });
  const dot = () => run('   ·   ', { size: 15, color: RULE });

  const firstHeader = new Header({
    children: [
      para(new ImageRun({
        type: 'png', data: logo,
        transformation: { width: px(LOGO_W), height: px(LOGO_H) },
        altText: { title: 'Woodland Estate & Title', description: 'Woodland Estate & Title logo', name: 'logo' },
      }), { alignment: AlignmentType.CENTER }),
    ],
  });

  const laterHeader = new Header({
    children: [
      para(new ImageRun({
        type: 'png', data: mark,
        transformation: { width: px(MARK_W), height: px(MARK_H) },
        altText: { title: 'Woodland Estate & Title', description: 'Woodland circle mark', name: 'mark' },
      }), { alignment: AlignmentType.CENTER }),
    ],
  });

  const firstFooter = new Footer({
    children: [
      para([
        contact('659 C Street, SE'), dot(), contact('Washington, DC 20003'),
      ], {
        alignment: AlignmentType.CENTER,
        border: { top: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 8 } },
        spacing: { after: 20 },
      }),
      para([
        contact('Tel (202) 516-6855'), dot(), contact('Fax (202) 888-1179'), dot(),
        contact('team@woodlandtitle.com'), dot(), contact('woodlandtitle.com'),
      ], { alignment: AlignmentType.CENTER }),
    ],
  });

  const laterFooter = new Footer({
    children: [
      para(new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: SOFT }),
        { alignment: AlignmentType.CENTER }),
    ],
  });

  const body = [
    para(run('[Date]'), { spacing: { after: 360 } }),
    para(run('[Recipient Name]'), { spacing: { after: 0 } }),
    para(run('[Company]'), { spacing: { after: 0 } }),
    para(run('[Street Address]'), { spacing: { after: 0 } }),
    para(run('[City, State ZIP]'), { spacing: { after: 360 } }),
    para([run('Re:', { italics: true }), run('\t[Property address or matter]')], {
      tabStops: [{ type: 'left', position: inch(0.5) }],
      spacing: { after: 360 },
    }),
    para(run('Dear [Name]:')),
    para(run('[Body of the letter.]')),
    para(run('Sincerely,'), { spacing: { before: 120, after: 840 } }),
    para(run('[Name]'), { spacing: { after: 0 } }),
    para(run('[Title]', { italics: true }), { spacing: { after: 0 } }),
    para(run('Woodland Estate & Title'), { spacing: { after: 0 } }),
  ];

  const doc = new Document({
    creator: 'Woodland Estate & Title',
    title: 'Woodland Estate & Title Letterhead',
    styles: {
      default: {
        document: {
          run: { font: FONT, size: 22, color: INK },
          paragraph: { spacing: { after: 200, line: 288 } },
        },
      },
    },
    sections: [{
      properties: {
        titlePage: true,
        page: {
          size: { width: 12240, height: 15840 },
          margin: {
            top: inch(1.75), bottom: inch(1.25), left: inch(1.1), right: inch(1.1),
            header: inch(0.6), footer: inch(0.5),
          },
        },
      },
      headers: { first: firstHeader, default: laterHeader },
      footers: { first: firstFooter, default: laterFooter },
      children: body,
    }],
  });

  const docx = await Packer.toBuffer(doc);

  // Same package, flagged as a template so Word opens a new untitled copy.
  const zip = await JSZip.loadAsync(docx);
  const ct = await zip.file('[Content_Types].xml').async('string');
  zip.file('[Content_Types].xml', ct.replace(
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml',
  ));
  const dotx = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });

  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  for (const [ext, buf] of [['docx', docx], ['dotx', dotx]]) {
    const name = `woodland-letterhead.${ext}`;
    fs.writeFileSync(path.join(OUT_DIR, name), buf);
    fs.writeFileSync(path.join(PUBLIC_DIR, name), buf);
    console.log(`wrote ${name} (${Math.round(buf.length / 1024)} KB)`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
