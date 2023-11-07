import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { terser } from "rollup-plugin-terser";
import type { RollupOptions } from "rollup";

const config: RollupOptions[] = [
  {
    input: "src/index.ts",
    plugins: [esbuild(), terser()],
    output: [
      {
        file: `dist/cjs/try-function.js`,
        format: "cjs",
        exports: "named",
        strict: false, // Don't emit "use strict" in output
      },
      {
        file: `dist/esm/try-function.mjs`,
        format: "es",
      },
    ],
  },
  {
    input: "src/index.ts",
    plugins: [dts()],
    output: {
      file: `dist/try-function.d.ts`,
      format: "es",
    },
  },
];

export default config;
