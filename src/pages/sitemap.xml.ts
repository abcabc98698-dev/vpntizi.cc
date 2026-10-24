import type { APIRoute } from "astro";
import { siteConfig } from "@/config/siteConfig";

export const prerender = true;

export const GET: APIRoute = async () => {
	const siteUrl = siteConfig.site_url.replace(/\/$/, "");
	const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap-0.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`.trim();

	return new Response(sitemapIndexXml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
};
