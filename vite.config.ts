import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export Vite configuration.  The `base` option ensures assets resolve
// correctly when deployed to GitHub Pages at the `/portfolio/` sub-path.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
});