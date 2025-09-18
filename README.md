
# Mohamad Serhal — Portfolio (UI/UX v11)

- Matches the latest canvas component you edited.
- Tailwind with theme tokens (background/foreground/primary/muted).
- Local UI primitives: Button, Card, Badge (supports `variant="secondary"`), Tabs.
- GitHub Pages ready: `vite` base set to `/portfolio/` + GH Actions workflow.

## Run locally
```bash
npm i
npm run dev
```

## Create/push the `portfolio` repo
```bash
gh auth login
git init && git add . && git commit -m "feat: portfolio uix v11"
git branch -M main
gh repo create MohamadSadem0/portfolio --public --source=. --remote=origin --push
# Settings → Pages → Source: GitHub Actions
```
