import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'portrait-preload-paths',
    transformIndexHtml: {
      enforce: 'post',
      transform(html, context) {
        for (const asset of Object.values(context.bundle || {})) {
          if (asset.type === 'asset' && /^mohosin-(320|640|960)\.webp$/.test(asset.name || '')) {
            html = html.replaceAll('/src/assets/portrait/' + asset.name, '/' + asset.fileName);
          }
        }
        return html;
      },
    },
  }],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('sweetalert2') || id.includes('@emailjs')) return 'contact-vendor';
          if (id.includes('framer-motion') || id.includes('/motion-')) return 'animation-vendor';
          if (id.includes('react-icons') || id.includes('lucide-react')) return 'icons';
          return 'vendor';
        },
      },
    },
  },
})
