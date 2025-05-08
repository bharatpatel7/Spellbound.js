import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),  // Adjust the path to your library's entry file
      name: 'Spellbound',
      fileName: (format) => `spellbound.${format}.js`,
    },
    outDir: 'dist',  // Output the built library to the "dist" folder
    emptyOutDir: true,  // Clear the "dist" folder before building
    rollupOptions: {
      // Ensure that Vite does not try to bundle an HTML entry point
      input: path.resolve(__dirname, 'src/index.ts'),
    },
  },
});
