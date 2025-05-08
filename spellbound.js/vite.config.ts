import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),  // Your library's entry file
      name: 'Spellbound',
      fileName: (format) => `spellbound.${format}.js`,
    },
    outDir: 'dist',  // Directory for the built library
    emptyOutDir: true,  // Empty out the dist folder before building
    rollupOptions: {
      // Ensure Vite does not treat this like a web app
      input: path.resolve(__dirname, 'src/index.ts'),
    },
  },
});
