/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxHeight: {
                customHeight: "500px",
            },
            fontFamily: {
                roboto: "Roboto, sans-serif",
            },
            colors: {
                // primary: "#213448",
                // secondary: "#DDDDDD",
                // tertiary: "#DDDDDD",
                primary: "#064232",
                secondary: "#FFF5F2",
                tertiary: "#DDDDDD",
            },
        },
    },
    plugins: [],
};
