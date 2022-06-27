## setup

```bash
git clone git@github.com:stoivo/example-esbuild-missing-sourcemap-from-package.git
cd example-esbuild-missing-sourcemap-from-package/
pnpm install
pnpm build
cat dist/main.js.map
# {
#   "version": 3,
#   "sources": ["../pkgs/fbutil/src/main.ts", "../src/main.ts"],
#   "sourcesContent": [null, "import print from \"fbutil/dist/main\"\n\nexport default function lol(): void {\n  console.log(`I love you`);\n  print()\n}\n"],
#   "mappings": ";;;AAAc,iBAAe;AAC3B,UAAQ,IAAI,QAAQ;AACtB;;;ACAe,eAAqB;AAClC,UAAQ,IAAI,YAAY;AACxB,QAAM;AACR;",
#   "names": []
# }
```

Notice the `null` in sourcesContent. I think this is an issue
