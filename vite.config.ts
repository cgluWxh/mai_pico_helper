import { VitePWA } from 'vite-plugin-pwa'
import webmanifest from './src/manifest.json';

export default {
  base: './',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: webmanifest,
    })
  ]
}
