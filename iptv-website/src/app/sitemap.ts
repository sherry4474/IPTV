import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.primestream.example";
	const routes = ["/", "/pricing", "/channels", "/faq", "/contact", "/legal/terms", "/legal/privacy", "/legal/refund", "/legal/dmca"]; 
	return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}

