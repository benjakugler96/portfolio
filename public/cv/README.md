# CV PDFs

Drop the two front-end résumés **in this folder** with these exact filenames:

| Filename                     | Language |
| ---------------------------- | -------- |
| `benjamin-kugler-es.pdf`     | Español  |
| `benjamin-kugler-en.pdf`     | English  |

The download buttons in the CV section link straight to these files (plain
`<a download>`, no JavaScript) and save them under the same name. If a file is
missing, the button 404s — so make sure both exist.

## Adding a language or a second role

Edit the `cvs` array in `src/components/Cv.astro` — add an entry with its `file`
path and `download` name, and drop the matching PDF here.
