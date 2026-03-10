export default function Hero() {
    return (
        <section className="max-w-4xl pt-6 md:pt-12" id="hero">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight mb-5 md:mb-8">
                Applying advanced perception algorithms to interdisciplinary
                challenges.
            </h1>
            <p className="mono-text text-base md:text-xl mb-8 md:mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
                AI &amp; Data Science student blending rigorous engineering with
                systems thinking to build impactful solutions.
            </p>
            <a
                className="brutal-btn inline-block bg-primary text-black font-bold py-3 px-6 md:py-4 md:px-8 text-base md:text-lg border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                href="https://drive.google.com/file/d/1lkg6TBcwcHeSaXsW6C4P3AkH__z_tu9n/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                [ Read Resume ]
            </a>
        </section>
    );
}
