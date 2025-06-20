import tailwindcss from '@tailwindcss/vite';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';


export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/sass/app.scss', 
                'resources/js/app.js',
                'resources/css/app.css'
            ],
            refresh: true,
        }),
        tailwindcss(),
    ],
});

