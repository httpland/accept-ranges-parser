import { BuildOptions } from "https://deno.land/x/dnt@0.33.1/mod.ts";

export const makeOptions = (version: string): BuildOptions => ({
  test: false,
  shims: {},
  typeCheck: true,
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  package: {
    name: "@httpland/accept-ranges-parser",
    version,
    description: "HTTP Accept-Ranges header field parser",
    keywords: [
      "http",
      "header",
      "parser",
      "parse",
      "deserialize",
      "stringify",
      "serialize",
      "accept-ranges",
      "none",
      "bytes",
    ],
    license: "MIT",
    homepage: "https://github.com/httpland/accept-ranges-parser",
    repository: {
      type: "git",
      url: "git+https://github.com/httpland/accept-ranges-parser.git",
    },
    bugs: {
      url: "https://github.com/httpland/accept-ranges-parser/issues",
    },
    sideEffects: false,
    type: "module",
    publishConfig: { access: "public" },
  },
  packageManager: "pnpm",
  mappings: {
    "https://deno.land/x/isx@1.1.0/is_string.ts": {
      name: "@miyauci/isx",
      version: "1.1.0",
      subPath: "is_string",
    },
    "https://deno.land/x/http_utils@1.2.0/token.ts": {
      name: "@httpland/http-utils",
      version: "1.2.0",
      subPath: "token.js",
    },
    "https://deno.land/x/http_utils@1.2.0/list.ts": {
      name: "@httpland/http-utils",
      version: "1.2.0",
      subPath: "list.js",
    },
  },
});
