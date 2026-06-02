# CV PDFs

Drop your résumé PDFs **in this folder** using these exact filenames. The
download button on the site builds the URL from `{type}` + `{country}`:

| Filename                                | Type       | Region              |
| --------------------------------------- | ---------- | ------------------- |
| `benjamin-kugler-fullstack-ar.pdf`      | Full Stack | Argentina (EN, AR)  |
| `benjamin-kugler-fullstack-es.pdf`      | Full Stack | España (ES)         |
| `benjamin-kugler-fullstack-en.pdf`      | Full Stack | International (EN)   |
| `benjamin-kugler-frontend-ar.pdf`       | Frontend   | Argentina (EN, AR)  |
| `benjamin-kugler-frontend-es.pdf`       | Frontend   | España (ES)         |
| `benjamin-kugler-frontend-en.pdf`       | Frontend   | International (EN)   |

## How the selection works

- On click, the site picks the region. If the visitor left the selector on
  **Auto**, it does a one-shot IP geolocation (`ipapi.co`) with a short timeout.
  `AR → -ar`, `ES → -es`, anything else (or a failed/slow lookup) → `-en`.
- The visitor can override detection with the manual selector
  (Argentina / España / International).
- The `-en` files are the **fallback** — make sure those three always exist.

## Adding or renaming CVs

To change the naming scheme or add a language, edit the `build the file name`
logic in `src/components/Cv.astro` and update the table above.
