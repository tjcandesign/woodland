# Woodland letterhead

Word letterhead for Woodland Estate & Title correspondence. US Letter, set in Georgia.

- **Page one:** the stacked logo centered at the top. The footer carries the office address, phone, fax, email and website above a thin rule.
- **Later pages:** the small circle mark at the top and a page number at the bottom.
- **Body:** a bracketed letter skeleton (date, recipient, Re: line, salutation, closing) in Georgia 11 pt.

| File | What it is |
|---|---|
| `woodland-letterhead.dotx` | Word template. Double-clicking it opens a new untitled letter, so the original stays clean. |
| `woodland-letterhead.docx` | The same letterhead as a plain document. |
| `build-letterhead.cjs` | Rebuilds both files from the logo SVGs in `public/assets/`. |

Both files are also copied to `public/assets/templates/` and offered for download on `/brand` under Email & Letterhead, next to `woodland-letterhead-preview.jpg`, the page-one thumbnail.

## Rebuilding

`docx` isn't a site dependency, so install it without saving:

```
npm i --no-save docx@9
node letterhead/build-letterhead.cjs
```

If the layout changes, refresh the thumbnail too: export page one to PDF from Word, then `pdftoppm -jpeg -r 110 -f 1 -l 1 -singlefile letter.pdf public/assets/templates/woodland-letterhead-preview`.
