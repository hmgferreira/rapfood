import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    apiUrl: "http://localhost:3000",
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
