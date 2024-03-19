import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from "fs";

export default defineConfig({
  clearScreen: false,
  plugins: [react()],
  server: {
    port: 443,
    host: "0.0.0.0",
    hmr: {
        host: 'tg-mini-app.local',
        port: 443,
    },
    https: {
      key: fs.readFileSync('./.cert/localhost-key.pem'),
      cert: fs.readFileSync('./.cert/localhost.pem'),
    },
    proxy: {
      "/bot": {
        target: "http://localhost:3000/bot",
      }
    },
  },
})
