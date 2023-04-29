import { BuildOptions } from "https://deno.land/x/dnt@0.34.0/mod.ts";

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
    "https://deno.land/x/isx@1.3.1/is_string.ts": {
      name: "@miyauci/isx",
      version: "1.3.1",
      subPath: "is_string.js",
    },
    "https://deno.land/x/isx@1.3.1/iterable/is_not_empty.ts": {
      name: "@miyauci/isx",
      version: "1.3.1",
      subPath: "iterable/is_not_empty.js",
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
