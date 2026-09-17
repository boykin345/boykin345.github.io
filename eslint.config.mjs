import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([".next/", "out/", "node_modules/"]),
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  {
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
  {
    files: ["*.config.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
  },
]);