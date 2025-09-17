"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

type Segment = { href: string; title: string };

type Props = {
  /** 手動指定したい場合に渡す。未指定なら usePathname から自動生成 */
  segments?: Segment[];
  /** "/" を除外したいパス（例: "/app" をベースに除外） */
  basePath?: string;
  /** スラッグ→表示名の置換（例: { archviz: "アーキビジュアライゼーション" }） */
  titleMap?: Record<string, string>;
  /** 先頭のHome表示名 */
  homeLabel?: string;
  /** 先頭Homeのリンク先 */
  homeHref?: string;
  /** 区切り記号 */
  separator?: string;
  /** 1行内で省略（…）するか */
  truncate?: boolean;
  /** schema.org の JSON-LD を出力 */
  withJsonLd?: boolean;
};

function normalizeLabel(slug: string) {
  // slug → "Archviz" 的な見やすい文字列へ
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Breadcrumbs({
  segments,
  basePath = "",
  titleMap = {},
  homeLabel = "Home",
  homeHref = "/",
  separator = "/",
  truncate = true,
  withJsonLd = true,
}: Props) {
  const pathname = usePathname();

  const computedSegments = useMemo<Segment[]>(() => {
    if (segments && segments.length) return segments;

    let path = pathname || "/";
    if (basePath && path.startsWith(basePath)) {
      path = path.slice(basePath.length) || "/";
    }
    const parts = path.split("/").filter(Boolean);

    const segs: Segment[] = [];
    let hrefAcc = basePath || "";
    parts.forEach((p) => {
      hrefAcc += `/${p}`;
      const title = titleMap[p] ?? normalizeLabel(p);
      segs.push({ href: hrefAcc, title });
    });
    return segs;
  }, [segments, pathname, basePath, titleMap]);

  // JSON-LD for SEO
  const jsonLd = useMemo(() => {
    if (!withJsonLd) return null;
    const itemListElement = [
      { "@type": "ListItem", position: 1, name: homeLabel, item: homeHref },
      ...computedSegments.map((s, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: s.title,
        item: s.href,
      })),
    ];
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement,
    };
  }, [computedSegments, homeHref, homeLabel, withJsonLd]);

  return (
    <nav aria-label="Breadcrumb" className="w-full">
      {withJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <ol className="flex flex-wrap items-center gap-1 text-sm text-zinc-600">
        {/* Home */}
        <li className="flex items-center gap-1">
          <Link
            href={homeHref}
            className="inline-flex items-center rounded-md px-1.5 py-0.5 hover:bg-zinc-100"
          >
            {/* アイコン代わりに家マーク（必要なら入れ替え可） */}
            <span aria-hidden>🏠</span>
            <span className="sr-only">{homeLabel}</span>
          </Link>
        </li>

        {/* Separator after Home */}
        {computedSegments.length > 0 && (
          <li className="px-1 text-zinc-400">{separator}</li>
        )}

        {/* Segments */}
        {computedSegments.map((s, i) => {
          const isLast = i === computedSegments.length - 1;
          return (
            <React.Fragment key={s.href}>
              <li className="flex items-center gap-1">
                {isLast ? (
                  <span
                    className={[
                      "max-w-[28ch]",
                      truncate ? "truncate" : "",
                      "font-medium text-zinc-900",
                    ].join(" ")}
                    aria-current="page"
                    title={s.title}
                  >
                    {s.title}
                  </span>
                ) : (
                  <Link
                    href={s.href}
                    className={[
                      "max-w-[28ch]",
                      truncate ? "truncate" : "",
                      "inline-flex items-center rounded-md px-1.5 py-0.5 hover:bg-zinc-100",
                    ].join(" ")}
                    title={s.title}
                  >
                    {s.title}
                  </Link>
                )}
              </li>
              {!isLast && (
                <li aria-hidden className="px-1 text-zinc-400">
                  {separator}
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
