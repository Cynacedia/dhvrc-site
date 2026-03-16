# Dot Hackers VRC

Community website for [Dot Hackers VRC](https://dothackvr.chat), a .hack anime-themed VRChat group.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS 4](https://tailwindcss.com) — styling
- GitHub Pages — hosting

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` automatically deploy via GitHub Actions.

## Adding Content

Worlds and avatars are managed as JSON files in `src/content/`:

- `src/content/worlds/` — VRChat world entries
- `src/content/avatars/` — character avatar entries

See existing files for the schema format.
