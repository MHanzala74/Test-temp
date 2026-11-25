# Temps Next.js App

A small Next.js (App Router) app with a counter and a `/api/health` endpoint.
Flow: **push to GitHub → Temps pulls from GitHub → build → deploy.**

## 1. Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## 2. Push to GitHub

Create an empty GitHub repo (e.g. `temps-nextjs-app`), then run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/temps-nextjs-app.git
git push -u origin main
```

## 3. Set up the Temps server (one time only)

On a fresh Ubuntu 22.04/24.04 VPS:

```bash
curl -fsSL https://temps.sh/deploy.sh | bash
```

If you don't have a domain yet, pick `quick` mode. You'll get a console URL like
`https://console.<server-ip>.sslip.io`. The script also prints the admin password.

Docs: https://temps.sh/docs/quickstart

## 4. Deploy on Temps

1. Open the Temps console and log in.
2. Click **New project** and connect your `temps-nextjs-app` repo from **GitHub**
   (you'll need to authorize GitHub access).
3. Choose the `main` branch. Temps detects the `Dockerfile` and builds from it.
   Port: `3000`.
4. Once deployed, Temps gives you a URL.

After this, every `git push` makes Temps pull the new code and redeploy it
automatically. Other branches get their own preview URLs.

### Using the CLI (optional)

```bash
bunx @temps-sdk/cli@0.1.38 login https://console.your-server.example
```

You can then deploy with the Temps CLI or skills: https://temps.sh/docs/cli

## Files

| File | Purpose |
| --- | --- |
| `app/page.js` | Home page (counter + health check) |
| `app/api/health/route.js` | Health endpoint |
| `Dockerfile` | Production build (Next.js standalone) |
| `next.config.js` | `output: "standalone"` |
