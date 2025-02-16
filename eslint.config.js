import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,   // 保留浏览器的全局变量
        ...globals.node,      // 添加 Node.js 环境的全局变量
      },
    },
  },
  pluginJs.configs.recommended,
];
