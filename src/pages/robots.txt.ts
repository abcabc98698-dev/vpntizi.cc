import type { APIRoute } from "astro";

export const prerender = true;

const robotsTxt = `
User-agent: Googlebot
Allow: /
Disallow: /_astro/
Disallow: /archive/?tag=
Disallow: /archive/?category=
Disallow: /archive/?uncategorized=

User-agent: Bingbot
Allow: /
Disallow: /_astro/
Disallow: /archive/?tag=
Disallow: /archive/?category=
Disallow: /archive/?uncategorized=

User-agent: Baiduspider
Allow: /
Disallow: /_astro/
Disallow: /archive/?tag=
Disallow: /archive/?category=
Disallow: /archive/?uncategorized=

User-agent: Yisouspider
Allow: /
Disallow: /_astro/
Disallow: /archive/?tag=
Disallow: /archive/?category=
Disallow: /archive/?uncategorized=

User-agent: *
Allow: /
Disallow: /_astro/
Disallow: /archive/?tag=
Disallow: /archive/?category=
Disallow: /archive/?uncategorized=

Sitemap: ${new URL("sitemap.xml", import.meta.env.SITE).href}
Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
