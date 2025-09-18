
# Portfolio – GitHub Pages Ready

1) Edit `vite.config.ts` -> set `base: '/REPO_NAME/'`
2) Install & test:
   npm i
   npm run dev
3) Create repo & push (GitHub CLI):
   gh auth login
   git init && git add . && git commit -m "feat: portfolio"
   git branch -M main
   gh repo create MohamadSadem0/REPO_NAME --public --source=. --remote=origin --push
4) Settings → Pages → Source: GitHub Actions
