# Portfolio Project

This is a project that is for showcasing my portfolio as a developer!

## Development

```sh
npm install
npm run dev       # Astro dev server
npm run preview   # build + serve dist/ through the real Workers runtime (wrangler dev)
```

## Deployment

The site is fully static and deployed as a [Cloudflare Worker with static assets](https://developers.cloudflare.com/workers/static-assets/)
(config in `wrangler.jsonc`, cache/security headers in `public/_headers`).

```sh
npx wrangler login   # once
npm run deploy       # astro build && wrangler deploy
```

To serve it on `trueferret.dev`, uncomment the `routes` entry in `wrangler.jsonc`,
or connect the repo under *Workers & Pages → Create → Import a repository* for deploys on every push
(build command `npm run build`, deploy command `npx wrangler deploy`).
