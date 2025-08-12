/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxHeight: {
                customHeight: "500px",
            },
        },
    },
    plugins: [],
};
