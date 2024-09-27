import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import rehypeShiki from "@shikijs/rehype";
import type { ShikiTransformer } from "@shikijs/types";

const transformer = (): ShikiTransformer => {
  return {
    name: "transformer",
    preprocess(code, options) {
      console.log(options.meta);
    },
    postprocess(html, options) {
      // Doesn't log anything
      console.log("postprocess", options);
    },
  };
};

export default defineConfig({
  plugins: [
    mdx({
      rehypePlugins: [
        [rehypeShiki, { theme: "nord", transformers: [transformer()] }],
      ],
    }),

    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});
