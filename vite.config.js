import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true
      },
      includeAssets: ['/assets/img/ppisudan.png', '/assets/img/ppi.png'],
      manifest: {
        name: 'PPI Sudan',
        short_name: 'PPI Sudan',
        description: 'Indonesian Students Association in Sudan',
        theme_color: '#0F766E',
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        icons: [
          {
            src: '/assets/img/ppi192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/img/ppi512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
