import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import svg from "@svgr/rollup";
import typescript from "rollup-plugin-typescript2";
import url from "rollup-plugin-url";

const packageJson = require("./package.json");

export default {
  input: "src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    commonjs(),
    svg(),
    url()
  ]
};