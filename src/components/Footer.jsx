const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const SOCIALS = [
    {
        icon: <LinkedInIcon />,
        href: "https://www.linkedin.com/in/kumarranmahesh",
        ariaLabel: "LinkedIn",
    },
    {
        icon: <GitHubIcon />,
        href: "https://github.com/KumarranMahesh",
        ariaLabel: "GitHub",
    },
    { icon: <XIcon />, href: "https://x.com/kumarranmahesh", ariaLabel: "X" },
];

export default function Footer() {
    return (
        <footer
            className="bg-background-light dark:bg-background-dark pt-16 md:pt-32 pb-8 md:pb-12 px-4 md:px-6 border-t-4 border-black dark:border-white scroll-mt-20"
            id="contact"
        >
            <div className="max-w-7xl mx-auto">
                <a
                    href="mailto:kumarranatwork@gmail.com"
                    className="text-4xl sm:text-5xl md:text-9xl font-black uppercase mb-8 md:mb-12 hover:text-primary transition-colors cursor-pointer inline-block no-underline text-inherit leading-tight"
                >
                    Let&apos;s Talk.
                </a>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t-4 border-black dark:border-white pt-8 md:pt-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4 uppercase">
                            Contact
                        </h3>
                        <a
                            className="mono-text text-lg hover:text-primary transition-colors inline-block mb-2"
                            href="mailto:kumarranatwork@gmail.com"
                        >
                            kumarranatwork@gmail.com
                        </a>
                        <p className="mono-text text-sm text-gray-600 dark:text-gray-400">
                            Available for freelance opportunities.
                        </p>
                    </div>

                    <div className="flex flex-col md:items-end">
                        <h3 className="text-xl font-bold mb-4 uppercase">
                            Socials
                        </h3>
                        <div className="flex gap-4 mb-8">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.ariaLabel}
                                    className="w-12 h-12 border-4 border-black dark:border-white flex items-center justify-center hover:bg-primary hover:text-black dark:hover:bg-primary dark:hover:border-primary transition-all brutal-btn shadow-brutal dark:shadow-brutal-dark bg-white dark:bg-black"
                                    href={social.href}
                                    aria-label={social.ariaLabel}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 md:mt-24 pt-6 border-t-2 border-black dark:border-white flex flex-col md:flex-row justify-between items-center gap-4 mono-text text-sm">
                    <p>&copy; {new Date().getFullYear()} Kumarran Mahesh.</p>
                    <p>Designed with intention.</p>
                </div>
            </div>
        </footer>
    );
}
