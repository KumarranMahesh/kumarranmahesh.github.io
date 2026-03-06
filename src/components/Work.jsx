const PROJECTS = [
    {
        title: "Multispectral Manuscript Analysis",
        description:
            "Developed computer vision pipelines to analyze degraded historical texts, utilizing multispectral imaging techniques to reveal hidden layers.",
        tags: [
            { label: "Computer Vision", filled: true },
            { label: "Python", filled: false },
        ],
        image: "Manuscript Analysis",
    },
    {
        title: "3D Pollution Trajectory Mapping",
        description:
            "Spatial data modeling project simulating the dispersion of pollutants over urban environments using 3D visualization tools.",
        tags: [
            { label: "Data Viz", filled: true },
            { label: "Spatial Analysis", filled: false },
        ],
        image: "Pollution Mapping",
    },
    {
        title: "Vision-Based Robotic Drawing Arm",
        description:
            "Engineered a robotic system capable of translating 2D images into continuous path planning commands for a drawing manipulator.",
        tags: [
            { label: "Simulation", filled: true },
            { label: "OpenCV", filled: false },
        ],
        image: "Robotic Arm",
    },
];

export default function Work() {
    return (
        <section className="scroll-mt-32" id="work">
            <div className="flex justify-between items-end mb-6 md:mb-8 border-b-4 border-black dark:border-white pb-3 md:pb-4">
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest">
                    Selected Work
                </h2>
                {/* View Archive — uncomment when project database is added
                <a
                    className="mono-text hover:text-primary transition-colors text-sm uppercase font-bold flex items-center gap-1"
                    href="#"
                >
                    View Archive{" "}
                    <span className="material-symbols-outlined text-sm">
                        arrow_forward
                    </span>
                </a>
                */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                {PROJECTS.map((project) => (
                    <article
                        key={project.title}
                        className="group border-4 border-black dark:border-white bg-white dark:bg-gray-900 shadow-brutal dark:shadow-brutal-dark flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
                    >
                        {/* Image placeholder */}
                        <div className="h-40 md:h-48 border-b-4 border-black dark:border-white bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
                            <div className="absolute inset-0 bg-primary opacity-10 group-hover:opacity-20 transition-opacity" />
                            <div className="w-full h-full flex items-center justify-center mono-text text-gray-500">
                                [ Image: {project.image} ]
                            </div>
                        </div>
                        {/* Content */}
                        <div className="p-4 md:p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="mono-text text-sm text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mono-text text-xs mt-auto">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag.label}
                                        className={
                                            tag.filled
                                                ? "bg-black text-white dark:bg-white dark:text-black py-1 px-2 uppercase"
                                                : "border-2 border-black dark:border-white py-1 px-2 uppercase"
                                        }
                                    >
                                        {tag.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
