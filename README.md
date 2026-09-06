# R.C.S. Creary — Creator / Brand Site

Free static personal-brand hub for **R.C.S. Creary** (author, systems researcher, Real Realize).

Newsletter-first layout with **Subscribe**, **Shop**, **Books**, **About**, and **Follow**.

## Local preview

```bash
cd rcs-creary-author-site
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

Or open `index.html` directly in a browser (fonts still load from Google Fonts if online).

## Files

| Path | Role |
|------|------|
| `index.html` | Single-page site |
| `styles.css` | Literary modern theme (navy / gold / warm paper) |
| `script.js` | Mobile nav + subscribe placeholder UX |
| `assets/seal.png` | Brand seal |
| `assets/favicon.ico` (+ PNG icons) | Favicons |
| `rcs-creary-author-site.zip` | Ready-to-upload archive |

## Connect the newsletter (free)

The subscribe form collects **email only**. It does **not** show a personal Gmail on the page.

1. Create a free list on [Buttondown](https://buttondown.email), [Beehiiv](https://www.beehiiv.com), or [Mailchimp](https://mailchimp.com).
2. In `index.html`, find `#subscribe-form` and set `action` to your provider embed URL.

**Buttondown example:**

```html
<form
  class="subscribe-form"
  id="subscribe-form"
  action="https://buttondown.email/api/emails/embed-subscribe/YOUR-USERNAME"
  method="post"
  ...
>
```

3. For Mailchimp / Beehiiv, paste the form `action` from their embed snippet (keep `name="email"` on the input, or match the field name your provider expects).
4. Remove or edit the helper note under the form once live.

Until `action` is set, submit shows an on-page reminder instead of posting.

## Shop links

Shop cards use placeholder marketplace URLs (`etsy.com`, `gumroad.com`). Replace those `href`s with your live **R.C.S. Creary / Real Realize** storefronts when ready.

## Books

Buy buttons point to [Amazon Author Central](https://www.amazon.com/author/rcscreary). Swap to ASIN product URLs later if desired.

## Free deploy — GitHub Pages

1. Create a GitHub repo (e.g. `rcs-creary-author-site` or `yourusername.github.io`).
2. Upload these files to the repo root (or a `/docs` folder).
3. **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main` (or `master`), folder `/` (or `/docs`)
4. Wait a minute; open `https://<user>.github.io/<repo>/` (or the custom domain you add).

### Optional: custom domain

Add a `CNAME` file with your domain, then point DNS per GitHub’s docs.

### Alternative free hosts

- **Netlify Drop**: drag the unzipped folder to [app.netlify.com/drop](https://app.netlify.com/drop)
- **Cloudflare Pages**: connect the repo or upload assets
- **Neocities** / **Tiiny.host**: upload the static folder

## Design notes

- Seal-driven palette: navy `#1a2740`, gold `#b69153`, warm paper `#f7f1e6`
- Serif display (Cormorant Garamond) + sans body (Source Sans 3)
- Mobile-first sticky nav; accessible contrast and focus states
- No author email address rendered anywhere on the site
