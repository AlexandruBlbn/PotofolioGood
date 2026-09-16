# Alexandru Balaban · Portfolio

Personal site: machine learning for medical imaging, plus the hardware projects around it.
Live at [alexandrublbn.vercel.app](https://alexandrublbn.vercel.app).

Built with Next.js 16 (App Router), React 19 and Tailwind CSS 4, deployed on Vercel.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

| Path | What it holds |
| --- | --- |
| `src/app/page.tsx` | Home page: hero with the paper-heart video, work, about, stack, contact |
| `src/app/vasojepa/page.tsx` | VasoJEPA case study |
| `src/content/vasojepa.ts` | Every VasoJEPA number shown on the site, in one place |
| `src/content/site.ts` | Email, CV, GitHub and LinkedIn links |
| `src/components/` | Header, footer, contact form, figure toggle, label-efficiency chart |
| `src/app/globals.css` | Colour tokens, type classes, hero background and animations |
| `src/app/opengraph-image.png`, `icon.png`, `favicon.ico` | Share card and icons |
| `public/images/hero-video.mp4` | The origami heart in the hero |
| `public/content/projects/` | Project images; VasoJEPA figures sit in `vasojepa/` |

The contact form has no backend: it opens the visitor's email app with the message filled in.
