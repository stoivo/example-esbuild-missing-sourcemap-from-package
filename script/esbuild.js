import * as esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/index.ts', ],
    outbase: 'src',
    outdir: 'dist',
    sourcemap: true,
    logLevel: 'debug',
    tsconfig: 'tsconfig.json',
    format: 'esm',
  });
