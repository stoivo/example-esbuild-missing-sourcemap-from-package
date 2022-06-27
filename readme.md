## setup

```bash
git clone git@github.com:stoivo/example-esbuild-missing-sourcemap-from-package.git
cd example-esbuild-missing-sourcemap-from-package/
pnpm install
pnpm build
cat dist/main.js.map
# {
#   "version": 3,
#   "sources": ["../pkgs/fbutil/src/main.ts", "../pkgs/fbutilesbuild/src/main.ts", "../src/main.ts"],
#   "sourcesContent": [null, "export default function hello() {\n  console.log(`Asdasd`);\n}\n", "import print from \"fbutil/dist/main\"\nimport print2 from \"fbutilesbuild/dist/main\"\n\nexport default function lol(): void {\n  console.log(`I love you`);\n  print()\n  print2()\n}\n"],
#   "mappings": ";;;AAAc,iBAAe;AAC3B,UAAQ,IAAI,QAAQ;AACtB;;;ACFe,kBAAiB;AAC9B,UAAQ,IAAI,QAAQ;AACtB;;;ACCe,eAAqB;AAClC,UAAQ,IAAI,YAAY;AACxB,QAAM;AACN,SAAO;AACT;",
#   "names": []
# }
```

Notice the `null` in sourcesContent. I think this is an issue
