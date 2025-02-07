import '../css/app.css'; // Importing CSS styles
import './bootstrap'; // Importing bootstrap (or any other initialization scripts)

import { createInertiaApp } from '@inertiajs/react'; // Inertia App setup
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'; // Helper to resolve Inertia pages
import { createRoot } from 'react-dom/client'; // React root for rendering

// Ensure the app name is read from the environment variable or default to 'Laravel'
const appName = import.meta.env.VITE_APP_NAME || 'Laravel'; // Get the app name (for title purposes)

createInertiaApp({
    title: (title) => `${title} - ${appName}`, // Dynamic title with app name

    resolve: (name) => {
        // Use resolvePageComponent to resolve the page component dynamically
        return resolvePageComponent(
            `./Pages/${name}.jsx`, // Path to Inertia pages
            import.meta.glob('./Pages/**/*.jsx') // Dynamically load all pages inside Pages directory
        );
    },

    setup({ el, App, props }) {
        // Create and render the root React element
        const root = createRoot(el); // Create the root React element
        root.render(<App {...props} />); // Render the App component with props
    },

    progress: {
        color: '#4B5563', // Customize progress bar color
    },
});
