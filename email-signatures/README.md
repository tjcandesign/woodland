# Woodland email signatures

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
