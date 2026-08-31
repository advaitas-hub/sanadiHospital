import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,       // Each page gets only its own CSS chunk
    target: 'es2020',         // Modern browsers — smaller output, no legacy polyfills
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        facilities: resolve(__dirname, 'facilities.html'),
        arthroscopy: resolve(__dirname, 'specialties/arthroscopy.html'),
        jointReplacement: resolve(__dirname, 'specialties/joint-replacement.html'),
        neurosurgery: resolve(__dirname, 'specialties/neurosurgery.html'),
        orthopaedics: resolve(__dirname, 'specialties/orthopaedics.html'),
        physiotherapy: resolve(__dirname, 'specialties/physiotherapy.html'),
        sportsInjuryClinic: resolve(__dirname, 'specialties/sports-injury-clinic.html'),
        traumaCare: resolve(__dirname, 'specialties/trauma-care.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
