const TECH_STACK = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "Git",
    "Linux",
    "SQL",
];

export default function Philosophy() {
    return (
        <section className="scroll-mt-32" id="philosophy">
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest border-b-4 border-black dark:border-white pb-4 inline-block">
                Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Systems-First Approach - spans 2 columns */}
                <div className="md:col-span-2 border-4 border-black dark:border-white p-8 bg-white dark:bg-gray-900 shadow-brutal dark:shadow-brutal-dark">
                    <div className="mb-6 border-b-4 border-black dark:border-white pb-4 inline-block">
                        <span className="material-symbols-outlined text-4xl text-primary">
                            hub
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                        Systems-First Approach
                    </h3>
                    <p className="mono-text text-gray-700 dark:text-gray-300">
                        I don&apos;t just build features — I think about how
                        everything connects. From data pipelines to model
                        deployment, I focus on designing systems that work
                        reliably together and can grow with the problem.
                    </p>
                </div>

                {/* Engineering Leadership */}
                <div className="border-4 border-black dark:border-white p-8 bg-white dark:bg-gray-900 shadow-brutal dark:shadow-brutal-dark flex flex-col justify-between">
                    <div className="mb-6 border-b-4 border-black dark:border-white pb-4 inline-block">
                        <span className="material-symbols-outlined text-4xl text-primary">
                            groups
                        </span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Engineering Leadership
                        </h3>
                        <p className="mono-text text-sm text-gray-700 dark:text-gray-300">
                            Being the lead of IOTA club, I learned that good
                            engineering is also about good communication. I help
                            teams cut through ambiguity, write things down, test
                            properly, and keep learning — so we ship work
                            we&apos;re proud of.
                        </p>
                    </div>
                </div>

                {/* Core Stack - full width, inverted colors */}
                <div className="md:col-span-3 border-4 border-black dark:border-white p-8 bg-black text-white dark:bg-white dark:text-black shadow-brutal dark:shadow-brutal-dark">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <div className="md:w-1/3">
                            <h3 className="text-2xl font-bold mb-2">
                                Core Stack
                            </h3>
                            <p className="mono-text text-sm text-gray-400 dark:text-gray-600">
                                The tools I use to build.
                            </p>
                        </div>
                        <div className="md:w-2/3 flex flex-wrap gap-4 mono-text text-sm">
                            {TECH_STACK.map((tech) => (
                                <span
                                    key={tech}
                                    className="border-2 border-white dark:border-black py-2 px-4 hover:bg-primary hover:border-primary transition-colors cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
