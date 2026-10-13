# Cranky Sticks
500 stick figure posters (advice, jokes, lessons, satire, sarcasm, cranky rants). Plain HTML/CSS/JS, no backend, no paid APIs, no build step. Posters are drawn on a canvas in the browser and saved as PNG.

## Try it
Double-click `index.html`.

## Deploy free
**Netlify:** open https://app.netlify.com/drop and drag this whole folder onto the page. You get a live link.
**Vercel:** upload the folder to a GitHub repo, import it at https://vercel.com/new, choose preset "Other", leave build settings empty, deploy.

## Make it yours
- `data.js`: one template per line: `type|pose|face|prop|message`. Use `~` to add a small second line. Poses: st sh pt cr fp rn ch hp lc sl. Faces: f a s d w. Props: mug phone book cloud bulb zzz clock plant laptop coin (or `-`). Avoid the `|` character in messages.
- `app.js`: colour palettes (`PAL`) and poses (`P`).
- Users can also edit the words on any poster before downloading.

## Bulk templates
`data2.js` holds 200 quick lines (`type|message`, visuals chosen automatically) and 8 fill-in formats (`FMTS`: type, text with `{}`, list of stems). Add a line or a stem to grow the library.
