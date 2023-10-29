import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: vercel(),
    integrations: [tailwind()],
    integrations: [
        tailwind({
        // Ejemplo: Deshabilita la inyección de una importación básica de `base.css` en cada página.
        // Muy útil si necesitas definir e/o importar tu propio `base.css` personalizado.
        applyBaseStyles: false,
    })],
});