import * as esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/index.ts', 'src/main.ts', ],
    outbase: 'src',
    outdir: 'dist',
    bundle: true,
    sourcemap: true,
    logLevel: 'verbose',
    tsconfig: 'tsconfig.json',
    format: 'esm',
  });
