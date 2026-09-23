import fs from "fs"
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, runnerImport, type Plugin } from "vite"
import type { BlogPost } from "./src/components/blog/types"

const SITE_URL = "https://www.getpatchup.ca"
const alias = { "@": path.resolve(__dirname, "./src") }

interface PageMeta {
  title: string
  description: string
  image?: string
  type?: "website" | "article"
}

const DEFAULT_META: PageMeta = {
  title: "PatchUp | Social Emotional Learning",
  description:
    "Ready-to-run social emotional lessons, daily check-ins, and drop-in activities for your classroom.",
  image: `${SITE_URL}/hero-6.png`,
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function renderHead(html: string, route: string, meta: PageMeta) {
  const url = `${SITE_URL}${route}`
  const image = meta.image ?? DEFAULT_META.image
  const tags = [
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="PatchUp" />`,
    `<meta property="og:type" content="${meta.type ?? "website"}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    image && `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].filter(Boolean)

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace("</head>", `  ${tags.join("\n  ")}\n</head>`)
}

// GitHub Pages only serves files that exist, so every client-side route gets
// its own HTML file (with Open Graph tags) instead of relying on the 404.html
// fallback. Link-preview scrapers like LinkedIn don't run JS and treat the
// fallback's 404 status as a dead link.
function staticRoutes(): Plugin {
  let outDir = "dist"

  return {
    name: "static-routes",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      const { module } = await runnerImport<{ posts: BlogPost[] }>(
        "./src/content/blog/posts/index.ts",
        { configFile: false, resolve: { alias } }
      )
      const template = fs.readFileSync(path.join(outDir, "index.html"), "utf8")

      // /foo.html is served at /foo, and /foo/index.html at /foo/.
      const pages: [file: string, route: string, meta: PageMeta][] = [
        ["index.html", "/", DEFAULT_META],
        ["contact.html", "/contact", { ...DEFAULT_META, title: "Contact | PatchUp" }],
        ["blog/index.html", "/blog/", { ...DEFAULT_META, title: "Blog | PatchUp" }],
        ...module.posts.map(({ meta }): [string, string, PageMeta] => [
          `blog/${meta.slug}.html`,
          `/blog/${meta.slug}`,
          {
            title: meta.title,
            description: meta.excerpt,
            image: meta.image,
            type: "article",
          },
        ]),
      ]

      for (const [file, route, meta] of pages) {
        const target = path.join(outDir, file)
        fs.mkdirSync(path.dirname(target), { recursive: true })
        fs.writeFileSync(target, renderHead(template, route, meta))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), staticRoutes()],
  base: "/",
  resolve: { alias },
})
