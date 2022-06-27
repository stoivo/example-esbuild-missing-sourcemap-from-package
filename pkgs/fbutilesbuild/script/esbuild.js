import * as esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/main.ts'],
    outbase: 'src',
    outdir: 'dist',
    bundle: true,
    sourcemap: true,
    logLevel: 'debug',
    // logLevel: 'verbose',
    tsconfig: 'tsconfig.json',
    format: 'esm',
  });


// tsc -p tsconfig.json --emitDeclarationOnly
