This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# 3.8 ページとレンダリング手法
`npm run build`

```bash
Route (pages)                              Size     First Load JS
┌ ○ / (347 ms)                             4.83 kB        83.7 kB
├   └ css/ae0e3e027412e072.css             707 B
├   /_app                                  0 B            78.9 kB
├ ○ /404                                   212 B          79.1 kB
├ λ /api/hello                             0 B            78.9 kB
└ ○ /sample                                378 B          79.3 kB
+ First Load JS shared by all              79.2 kB
  ├ chunks/framework-0f397528c01bc177.js   45.7 kB
  ├ chunks/main-5cebf592faf0463a.js        31.8 kB
  ├ chunks/pages/_app-05f53d08443c56f6.js  402 B
  ├ chunks/webpack-2369ea09e775031e.js     1.02 kB
  └ css/ab44ce7add5c3d11.css               247 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)

```