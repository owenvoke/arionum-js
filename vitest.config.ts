import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        root: process.cwd(),
        globals: true,
        exclude: ["node_modules", ".next", "**/node_modules/**"],
    },
});
