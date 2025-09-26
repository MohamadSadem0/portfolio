# Portfolio Website

This repository contains the source code for a personal portfolio web site built with [React](https://react.dev/) and [Vite](https://vite.dev/) using TypeScript and Tailwind CSS.  It showcases projects, experience, contact information and includes a 3D scene rendered with three.js.

## Running the site locally

1. **Install dependencies:**  Make sure you have [Node.js](https://nodejs.org/) installed.  After cloning the repository, run:

   ```bash
   npm install
   ```

2. **Start the development server:**  Launch the Vite dev server at [`http://localhost:5173`](http://localhost:5173) with hot‑module reloading:

   ```bash
   npm run dev
   ```

3. **Build for production:**  Generate an optimized static build into the `dist` directory:

   ```bash
   npm run build
   ```

   To preview the production build locally you can run:

   ```bash
   npm run preview
   ```

## Deploying to GitHub Pages

This project is configured to deploy to GitHub Pages under the `portfolio` repository name.  Vite requires a **base path** to resolve asset URLs correctly when your site is served from a sub‑path such as `https://&lt;USERNAME&gt;.github.io/portfolio/`.  The `base` option in `vite.config.ts` has already been set to `'/portfolio/'`:

```ts
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
});
```

The official Vite static deployment guide explains that you must set `base` to `'/&lt;REPO&gt;/'` when deploying to a sub‑folder and then use GitHub Pages with a workflow【511187378235667†L255-L267】.  The guide also recommends using GitHub Actions to automate builds and deployments【511187378235667†L268-L324】.  This repository includes a ready‑to‑use workflow in `.github/workflows/deploy.yml`.

### Steps to enable GitHub Pages

1. **Create a repository called `portfolio` on GitHub** and push this code to its `main` branch.
2. **Enable GitHub Pages** by going to **Settings → Pages** in the repository and choosing *GitHub Actions* as the source.  The provided workflow will build the site on every push to `main` and publish it.
3. **Commit and push your changes.**  After GitHub Actions runs successfully, your site will be available at:

```
https://<USERNAME>.github.io/portfolio/
```

## Repository structure

Key directories and files:

| Path | Description |
| --- | --- |
| `public/` | Static assets such as the favicon, Open Graph image and 3D model files.  These files are served as‑is. |
| `src/` | TypeScript source code for React components, pages and data.  The `pages` folder contains route components, while `components` and `assets` contain shared UI pieces and images. |
| `tailwind.config.js` | Tailwind CSS configuration.  Defines custom colours and fonts used throughout the site. |
| `vite.config.ts` | Vite configuration with the `base` option set for GitHub Pages deployment. |
| `.github/workflows/deploy.yml` | GitHub Actions workflow that builds and deploys the site to GitHub Pages. |
| `.gitignore` | Git ignore rules for Node.js projects (e.g., `node_modules/`, `dist/`). |

## Customising the site

- **Profile and project data:**  Edit the files under `src/data/` to update your personal details and the list of projects displayed.
- **3D scenes:**  The 3D models shown on the home page live under `public/models/`.  You can replace these GLB files with your own models (ensure they remain in the same directory and adjust the component props if necessary).
- **Styling:**  Tailwind CSS makes it easy to adjust styling.  Update `tailwind.config.js` to tweak themes or extend the design system.

## License

This project is provided for personal use.  You may customise and deploy it under your own account.  Feel free to modify the content and design to suit your needs.