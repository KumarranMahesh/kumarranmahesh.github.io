const BLOG_POSTS = [
    {
        category: "Opinion",
        title: "Nostalgia is the Laziest Tool in Modern Cinema",
        readTime: "5 min read",
        href: "https://kumarranoffscreen.com/essay/nostalgia-is-the-laziest-tool-in-modern-cinema",
    },
    {
        category: "Opinion",
        title: "When Romance Just Stopped Driving the Car.",
        readTime: "5 min read",
        href: "https://kumarranoffscreen.com/essay/romance-isnt-dead-it-just-stopped-driving-the-car",
    },
];

export default function Offscreen() {
    return (
        <section
            className="bg-black text-white dark:bg-white dark:text-black border-y-4 border-black dark:border-white py-14 md:py-24 px-4 md:px-6 relative overflow-hidden scroll-mt-20"
            id="offscreen"
        >
            {/* Decorative SVG */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                <svg
                    fill="none"
                    height="400"
                    viewBox="0 0 400 400"
                    width="400"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="200"
                        cy="200"
                        r="198"
                        stroke="currentColor"
                        strokeDasharray="10 10"
                        strokeWidth="4"
                    />
                    <circle
                        cx="200"
                        cy="200"
                        r="150"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <circle
                        cx="200"
                        cy="200"
                        r="100"
                        stroke="currentColor"
                        strokeDasharray="20 20"
                        strokeWidth="4"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center relative z-10">
                <div className="md:w-1/2">
                    <h2 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase leading-none mb-4 md:mb-6">
                        The
                        <br />
                        Off
                        <br />
                        Screen.
                    </h2>
                    <div className="h-2 w-32 bg-primary mb-8" />
                    <p className="mono-text text-base md:text-lg mb-5 md:mb-8 text-gray-400 dark:text-gray-600">
                        Cinema / Culture / Criticism
                    </p>
                    <p className="text-base md:text-xl mb-8 md:mb-10 max-w-md">
                        Film essays you will actually read. Captivating reads
                        for viewers who just don&apos;t want surface-level
                        takes.
                    </p>
                    <a
                        className="brutal-btn inline-flex items-center gap-2 bg-white text-black dark:bg-black dark:text-white font-bold py-3 px-6 md:py-4 md:px-8 text-sm md:text-base border-4 border-black dark:border-white hover:bg-primary hover:text-black dark:hover:bg-primary dark:hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        href="https://kumarranoffscreen.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit Blog{" "}
                        <span className="material-symbols-outlined">
                            launch
                        </span>
                    </a>
                </div>

                <div className="md:w-1/2 w-full grid gap-4 md:gap-6">
                    {BLOG_POSTS.map((post) => (
                        <a
                            key={post.title}
                            href={post.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white dark:border-black p-4 md:p-6 hover:border-primary dark:hover:border-primary transition-colors group cursor-pointer block no-underline text-inherit"
                        >
                            <div className="mono-text text-xs text-primary mb-2 uppercase font-bold">
                                {post.category}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {post.title}
                            </h3>
                            <p className="mono-text text-sm text-gray-400 dark:text-gray-600">
                                {post.readTime}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
