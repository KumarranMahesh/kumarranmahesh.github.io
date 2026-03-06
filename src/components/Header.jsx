import { useState, useEffect, useCallback } from "react";

const SunIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
    >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

const MoonIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

const NAV_LINKS = [
    { id: "philosophy", label: "Philosophy" },
    { id: "work", label: "Work" },
    { id: "offscreen", label: "Offscreen" },
    { id: "contact", label: "Contact" },
];

export default function Header({ darkMode, toggleDarkMode }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Intersection Observer for active section highlighting
    useEffect(() => {
        const sections = NAV_LINKS.map((link) =>
            document.getElementById(link.id),
        ).filter(Boolean);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [mobileMenuOpen]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const scrollToSection = useCallback((e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 bg-background-light dark:bg-background-dark border-b-4 border-black dark:border-white z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <a
                        className="text-2xl font-bold tracking-tight hover:text-primary transition-colors"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        Kumarran Mahesh
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex gap-8 mono-text text-sm uppercase font-medium">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={(e) => scrollToSection(e, link.id)}
                                    className={`transition-colors ${
                                        activeSection === link.id
                                            ? "text-primary"
                                            : "hover:text-primary"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <button
                            onClick={toggleDarkMode}
                            className="w-10 h-10 border-4 border-black dark:border-white flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary dark:hover:border-primary transition-all brutal-btn shadow-brutal dark:shadow-brutal-dark bg-white dark:bg-black text-lg"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-[5px] z-[60]"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        aria-label="Toggle mobile menu"
                    >
                        <div
                            className={`hamburger-bar w-6 h-[3px] bg-black dark:bg-white origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""} transition-all duration-300`}
                        />
                        <div
                            className={`hamburger-bar w-6 h-[3px] bg-black dark:bg-white ${mobileMenuOpen ? "opacity-0" : ""} transition-all duration-300`}
                        />
                        <div
                            className={`hamburger-bar w-6 h-[3px] bg-black dark:bg-white origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""} transition-all duration-300`}
                        />
                    </button>
                </div>
            </header>

            {/* Mobile nav overlay */}
            <div
                className={`fixed inset-0 bg-background-light dark:bg-background-dark z-[55] flex flex-col items-center justify-center gap-8 transition-all duration-400 ${
                    mobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={(e) => scrollToSection(e, link.id)}
                        className="text-3xl font-bold uppercase tracking-widest hover:text-primary transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
                <button
                    onClick={toggleDarkMode}
                    className="mt-4 w-14 h-14 border-4 border-black dark:border-white flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary dark:hover:border-primary transition-all brutal-btn shadow-brutal dark:shadow-brutal-dark bg-white dark:bg-black text-2xl"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </>
    );
}
