"use client";

import katex from "katex";
import { useMemo } from "react";

const TOKEN = /(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g;

function renderLatex(source: string, displayMode: boolean): string {
  return katex.renderToString(source, {
    displayMode,
    throwOnError: false,
    output: "html",
  });
}

function toHtml(text: string): string {
  const parts = text.split(TOKEN);
  return parts
    .map((part) => {
      if (part.startsWith("$$") && part.endsWith("$$")) {
        return renderLatex(part.slice(2, -2), true);
      }
      if (part.startsWith("$") && part.endsWith("$") && part.length > 2) {
        return renderLatex(part.slice(1, -1), false);
      }
      return part
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
    })
    .join("");
}

export function MathText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const html = useMemo(() => toHtml(text), [text]);
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
