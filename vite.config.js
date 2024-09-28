import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        contactUs: resolve(__dirname, 'contact-us.html'),
        addToCart: resolve(__dirname, 'addToCart.html'),
        medicalSupplies: resolve(__dirname, 'medical-supplies.html'),
      },
    },
  },
});
