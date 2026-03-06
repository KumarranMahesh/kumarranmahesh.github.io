export default function Hero() {
    return (
        <section className="max-w-4xl pt-12" id="hero">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                Applying advanced perception algorithms to interdisciplinary
                challenges.
            </h1>
            <p className="mono-text text-lg md:text-xl mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
                AI &amp; Data Science student blending rigorous engineering with
                systems thinking to build impactful solutions.
            </p>
            <a
                className="brutal-btn inline-block bg-primary text-black font-bold py-4 px-8 text-lg border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                href="https://drive.google.com/file/d/1Wp5hacql9KiXy4SJK17bVrEVJQVxca2b/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                [ Read Resume ]
            </a>
        </section>
    );
}
