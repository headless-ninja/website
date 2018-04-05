---
title: Proxy Drupal with Node.js
category: guides
weight: 20
---

In order to compress (gzip) all your requests, you can let all communications go through your front-end server.

By setting up the proxy, we enable the following features:

-   Compression (gzip) for all communications between the client and server. Drupal doesn't support this, but Express does. This can save up to 90% of the response size.
-   Mask your Drupal website url.
-   Certain static files like `sitemap.xml` & `robots.txt` will be proxied to Drupal, instead of being served through HN (like all paths by default).

In the guide you will learn how to setup this proxy.

Please note: a prerequisite to this guide, is that you've set up an Express.js server. If you need help, please follow [this guide](/docs/guides/server-side-rendering) and learn how to set up an HN server in Node.js, with SSR.

## Install the package

First, we'll add the `http-proxy-middleware` package by running the following command in our project's terminal.

```bash
npm install http-proxy-middleware --save
```

## Set-up the server

Now, open the `server/index.js` file and add the following lines.

```javascript
import proxy from 'http-proxy-middleware';

app.use(proxy([
  '/hn',
  '/sitemap.xml',
  '/sitemaps',
], {
  target: 'http://drupal.dev',
  changeOrigin: true,
  logLevel: 'silent',
}));

app.get('/robots.txt', (req, res) => {
  const url = 'https://' + req.get('host');
  res.type('text/plain');
  res.send(`# robots.txt\n\nUser-agent: *\nAllow: *\nSitemap: ${url}/sitemap.xml`);
});
```

Please replace "<http://drupal.dev>" with [your Drupal url](/docs/drupal-quickstart).

We now made sure that

-   every request to `react.dev/hn`, will be proxied to `drupal.dev/hn`.
-   bots go to Drupal for your sitemaps.
-   bots can find the sitemap on `/sitemap.xml` by serving a `robots.txt` file.

## Use the proxy

Now, we only need to tell the client to connect to the proxy, instead of to the Drupal. This sounds hard, but it's exactly that: tell HN.

Open `client/index.js`, and you should find something similar to below. We will tell HN to go to 'itself'. If your website is hosted at <http://example.com>, HN should request through <http://example.com/hn>, so by adding the following we tell HN to use your website's URL as its base.

```javascript
import { site } from 'hn-react';

const { protocol, host } = window.location;
site.initialize({ url: `${protocol}//${host}` });
```

That's it! Your requests are now compressed, your sitemap is served, and your Drupal url is 'hidden'.
