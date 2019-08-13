import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import * as meta from "./package.json";
import camelCase from "camelcase";

const config = {
  input: "src/index.js",
  output: {
    file: `dist/${meta.name}.js`,
    name: camelCase(meta.name),
    format: "umd",
    banner: `// ${meta.homepage} v${
      meta.version
    } Copyright ${new Date().getFullYear()} ${meta.author.name}`
  },
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    })
  ]
};

export default [
  config,
  {
    ...config,
    output: {
      ...config.output,
      file: `dist/${meta.name}.min.js`
    },
    plugins: [
      ...config.plugins,
      terser({
        output: {
          preamble: config.output.banner
        }
      })
    ]
  }
];
