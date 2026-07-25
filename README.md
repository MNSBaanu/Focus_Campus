# Focus — Campus Event Photography

A photography portfolio and booking site for Focus, an event photography studio covering university and campus events across India.

## Project info

- **Stack**: Vite + React + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Lovable Cloud (Supabase)
- **MCP server**: `supabase/functions/mcp` exposes public read-only tools for packages, event types, featured shoots, and studio info

## Local development

Requirements: Node.js + npm (recommended via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

```sh
# Clone the repo
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm i

# Start the dev server
npm run dev
```

The app expects a `.env` file at the project root with your Supabase/Lovable Cloud credentials. This file is intentionally ignored from Git.

## Available scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run the Vitest test suite |
| `npm run test:watch` | Run tests in watch mode |

## Editing the project

You can edit this project in three ways:

1. **Lovable** — open the project in Lovable and prompt to make changes.
2. **Local IDE** — clone the repo, make changes, and push them back.
3. **GitHub** — edit files directly in the GitHub UI or via GitHub Codespaces.

## Deploy

Open the project in Lovable and click **Share → Publish** to deploy the latest version.

## Custom domain

You can connect a custom domain from **Project → Settings → Domains**. Read the [custom domain docs](https://docs.lovable.dev/features/custom-domain#custom-domain) for details.

## Security notes

- Never commit `.env` or other secrets to Git. The `.gitignore` already excludes them.
- Supabase credentials are handled by the Lovable Cloud integration. The publishable key is safe to ship in the frontend bundle; Row-Level Security protects the data.
