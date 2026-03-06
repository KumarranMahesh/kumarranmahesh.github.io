import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Work from "./components/Work";
import Offscreen from "./components/Offscreen";
import Footer from "./components/Footer";

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    return (
        <div className="bg-background-light dark:bg-background-dark text-black dark:text-white min-h-screen flex flex-col">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="flex-grow pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto space-y-32">
                    <Hero />
                    <Philosophy />
                    <Work />
                </div>
            </main>
            <Offscreen />
            <Footer />
        </div>
    );
}

export default App;
