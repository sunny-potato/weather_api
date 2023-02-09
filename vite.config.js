//https://vitejs.dev/guide/build.html

//  Error message during build in netlify :
//  " Top-level await is not available in the configured target environment ("chrome87", "edge88", "es2020", "firefox78", "safari14" + 2 overrides)"

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
  },
});
