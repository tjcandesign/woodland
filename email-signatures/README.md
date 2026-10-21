# Woodland email signatures

## Current: Georgia signature with the turning mark (Oct 2026)

`woodland-signature.html` is the one to install. Everything is set in Georgia (the system-font stand-in for the site's EB Garamond). On the left is the footer's circle W in navy: after a half-second pause, the lettered ring makes a slow half turn (4.5 seconds) and settles in the normal logo position. Most mail apps play it a single time because the GIF has no loop flag. Outlook for Windows shows only the first frame, where the ring is still upside down.

| File | What it is |
|---|---|
| `woodland-signature.html` | The signature, with `[TOKENS]` (same tokens as below) |
| `signature-preview.html` | Preview with sample values, plus Copy and Replay buttons. Serve the repo root over http (`python3 -m http.server`) and open `/email-signatures/signature-preview.html` |
| `build-mark-gif.mjs` | Rebuilds the GIF from `public/assets/circle-ring-white.svg` + `circle-w-white.svg` (`node email-signatures/build-mark-gif.mjs`, needs ffmpeg) |

Hosted mark: `https://www.woodlandtitle.com/assets/email/woodland-mark-spin.gif` (176 px, shown at 88 px, about 320 KB, 25 fps, 8 colors). There's also a still `woodland-mark.png` in the same folder if an app won't take the GIF.

Install the same way as the older signatures below: open the file in a browser, select all, copy, and paste it into the mail app's signature editor. In Apple Mail, uncheck "Always match my default message font."

---

## Earlier set (May 2026, Calibri)

Three HTML signatures for Woodland Estate & Title. All three render consistently in **Outlook (Mac and Windows), Apple Mail, and Gmail**, and they pull the firm's circle mark from a hosted URL so it doesn't attach to every email.

## Files

| File | Use for | Has image |
|---|---|---|
| `woodland-first-touch.html` | Outbound first-touch emails to new external contacts | Yes (circle mark) |
| `woodland-default.html` | Replies and ongoing correspondence — the workhorse | No |
| `woodland-thread.html` | 4th+ message in long threads where the full block is noise | No |
| `preview.html` | Open in a browser to see all three rendered | — |

## Tokens to replace

Each file is parameterized with `[ALL_CAPS_BRACKETS]` placeholders. Search and replace per-person:

| Token | Example |
|---|---|
| `[NAME]` | `C.J. Thacker` |
| `[TITLE]` | `Managing Attorney` |
| `[DIRECT_PHONE]` | `(202) 516-6855` |
| `[EMAIL_TEL_DIGITS]` | `2025166855` (10 digits, no formatting — feeds the `tel:` link) |
| `[EMAIL]` | `cj@woodlandtitleDC.com` |

The thread variant only needs `[NAME]`.

## Hosted mark

The image is loaded from:

```
https://woodlandsite.vercel.app/assets/email-mark-woodland.png
```

If the marketing site moves to a final domain, update the `src` URL in `woodland-first-touch.html` (one line, near the top) to match — the rest of the signature is independent of where the site lives.

The mark is a 256 × 256 px transparent PNG of the dark circle monogram, displayed at 72 × 72 px in the signature. Hosting it on the marketing site (vs attaching it inline) means a clean attachment list in long threads.

---

## Install instructions

### Outlook for Mac
1. Outlook → **Settings → Signatures**.
2. Click **+** to create a new signature, name it `Woodland — first touch`.
3. Open `woodland-first-touch.html` in a browser → select all (`⌘A`) → copy (`⌘C`).
4. Paste into the Outlook signature editor (`⌘V`). The formatting and image come across.
5. Repeat for `Woodland — default` and `Woodland — thread reply`.
6. **Set defaults:** under **Choose default signature**, set "New messages" to `Woodland — first touch` and "Replies/forwards" to `Woodland — default`.

### Outlook for Windows (classic)
1. **File → Options → Mail → Signatures**.
2. Outlook on Windows reads from `.htm` files in `%APPDATA%\Microsoft\Signatures\`. Save each HTML file to that folder (rename to `.htm`) and Outlook will pick them up after a restart.
3. Set defaults under the same dialog.

### Outlook for Windows (new)
The new Outlook on Windows mirrors the Mac flow — paste from a browser into the signature editor in **Settings → Mail → Signatures**.

### Apple Mail
1. **Mail → Settings → Signatures**.
2. Select the account, click **+** to add a new signature.
3. Open the HTML file in Safari, select all, copy, paste into the signature editor.
4. **Important:** uncheck "Always match my default message font" so Mail doesn't override the Calibri stack.
5. Drag the signature into the account's signature pool, then choose it from the **Choose Signature** dropdown when composing.

### Gmail (web)
1. **Settings (gear) → See all settings → General → Signature**.
2. Click **+ Create new**, name it.
3. Open the HTML file in a browser, select all, copy, paste into the Gmail signature editor.
4. Under "Signature defaults," choose your `New emails` and `On reply/forward` signatures.

---

## Brand sources

- **Sage-dark name accent:** `#5F6C4E`
- **Body text:** `#3C342B`
- **Muted address text:** `#7D7568`
- **Light divider rule:** `#DED3C0`
- **Center-dot separator:** `#C2B8A1`
- **Fraud / confidentiality disclosure:** `#9E9788` at 10 px

These colors mirror the marketing site exactly. If the firm later locks down a Bainbridge variant, the same structure is reusable — only the mark, name accent color, and contact block change.

## Maintenance

- The mark file lives at `assets/email-mark-woodland.png` in the `woodlandsite` deployment. Re-host or replace there if the brand mark is ever updated.
- The fraud notice copy is duplicated across `first-touch` and `default`. Keep the two files in sync if the language changes.
