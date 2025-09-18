
# Mohamad Serhal — Portfolio

Built with React + TypeScript + Vite + Tailwind.
- HashRouter (GitHub Pages friendly)
- Vite base already set to `/portfolio/`
- GH Actions workflow for auto deploy

## Run locally
```bash
npm i
npm run dev
```

## Create the `portfolio` repo and push
```bash
gh auth login

git init
git add .
git commit -m "feat: portfolio initial"
git branch -M main

gh repo create MohamadSadem0/portfolio --public --source=. --remote=origin --push
```

## Enable GitHub Pages
- Repo → Settings → Pages → Source: GitHub Actions
- Site: https://MohamadSadem0.github.io/portfolio/
