import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
import * as path from 'path';

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 5173,
  },
   resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}); 