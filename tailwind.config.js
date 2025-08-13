/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxHeight: {
                customHeight: "500px",
            },
            colors: {
                secondary: "#B4E50D",
                // primary: "#064232",
                primary: "#FB4141",
                // secondary: "#FFF5F2",
                tertiary: "#F2EDD1",
            },
        },
    },
    plugins: [],
};
