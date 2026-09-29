import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Ensure assets in src/assets are copied to public for static OG and favicon serving
try {
  const assetsDir = path.resolve(__dirname, "./src/assets");
  const publicDir = path.resolve(__dirname, "./public");

  const iconSrc = path.join(assetsDir, "portfolio-icon.png");
  if (fs.existsSync(iconSrc)) {
    fs.copyFileSync(iconSrc, path.join(publicDir, "portfolio-icon.png"));
    fs.copyFileSync(iconSrc, path.join(publicDir, "favicon.ico"));
    fs.copyFileSync(iconSrc, path.join(publicDir, "favicon.png"));
    const oldSvg = path.join(publicDir, "favicon.svg");
    if (fs.existsSync(oldSvg)) {
      try { fs.unlinkSync(oldSvg); } catch {}
    }
  }

  const socialSrc = path.join(assetsDir, "social_image.png");
  if (fs.existsSync(socialSrc)) {
    fs.copyFileSync(socialSrc, path.join(publicDir, "social_image.png"));
  }
} catch (e) {
  console.error("Asset sync error:", e);
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    {
      name: "copy-brand-assets",
      buildStart() {
        const assetsDir = path.resolve(__dirname, "./src/assets");
        const publicDir = path.resolve(__dirname, "./public");
        const iconSrc = path.join(assetsDir, "portfolio-icon.png");
        if (fs.existsSync(iconSrc)) {
          fs.copyFileSync(iconSrc, path.join(publicDir, "portfolio-icon.png"));
          fs.copyFileSync(iconSrc, path.join(publicDir, "favicon.ico"));
          fs.copyFileSync(iconSrc, path.join(publicDir, "favicon.png"));
          const oldSvg = path.join(publicDir, "favicon.svg");
          if (fs.existsSync(oldSvg)) {
            try { fs.unlinkSync(oldSvg); } catch {}
          }
        }
        const socialSrc = path.join(assetsDir, "social_image.png");
        if (fs.existsSync(socialSrc)) {
          fs.copyFileSync(socialSrc, path.join(publicDir, "social_image.png"));
        }
      },
      closeBundle() {
        const assetsDir = path.resolve(__dirname, "./src/assets");
        const distDir = path.resolve(__dirname, "./dist");
        if (fs.existsSync(distDir)) {
          const iconSrc = path.join(assetsDir, "portfolio-icon.png");
          if (fs.existsSync(iconSrc)) {
            fs.copyFileSync(iconSrc, path.join(distDir, "portfolio-icon.png"));
            fs.copyFileSync(iconSrc, path.join(distDir, "favicon.ico"));
            fs.copyFileSync(iconSrc, path.join(distDir, "favicon.png"));
          }
          const socialSrc = path.join(assetsDir, "social_image.png");
          if (fs.existsSync(socialSrc)) {
            fs.copyFileSync(socialSrc, path.join(distDir, "social_image.png"));
          }
        }
      },
    },
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/my-portfolio/',
  assetsInclude: ['**/*.JPEG'],
}));
