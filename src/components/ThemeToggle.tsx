import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark" || saved === "light") return saved;
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
        } else {
            document.documentElement.classList.remove("dark");
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
        }
    }, [theme]);

    const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return (
        <button
            onClick={toggle}
            aria-label="Alternar tema"
            title="Alternar tema"
            className="p-2 rounded-md border hover:bg-[#F2EBEE]/20  transition-colors"
        >
            {theme === "dark" ? (
                // icon: sol (tema claro)
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 7a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
            ) : (
                // icon: luna (tema oscuro)
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;