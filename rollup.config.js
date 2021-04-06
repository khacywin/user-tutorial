import postcss from "rollup-plugin-postcss";
import svg from "rollup-plugin-svg";
import typescript from "rollup-plugin-typescript2";

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
    svg()
  ]
};