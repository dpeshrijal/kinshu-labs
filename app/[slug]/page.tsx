import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteContentPage } from "@/components/home/site-content-page";
import { getSitePage, sitePageSlugs } from "@/components/home/site-page-data";

interface SitePageRouteProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return sitePageSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: SitePageRouteProps): Metadata {
  const page = getSitePage(params.slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.eyebrow} | Kinshu Labs`,
    description: page.description,
  };
}

export default function SitePage({ params }: SitePageRouteProps) {
  const page = getSitePage(params.slug);

  if (!page) {
    notFound();
  }

  return <SiteContentPage page={page} />;
}
