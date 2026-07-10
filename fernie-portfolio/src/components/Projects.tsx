import ProjectCard from "./ProjectCard";

function Projects() {
    const projects = [
        {
            title: "Lexical Constraint LLM",
            technology: "AI / NLP / LLM Fine-tuning",
            description: "A multilingual LLM project exploring controlled vocabulary generation based on linguistic roots.",
        },
        {
            title: "Orca Pod Strike",
            technology: "Swift / SpriteKit",
            description: "A 2D mobile game built with SpriteKit.",
        },
        {
            title: "JobPop",
            technology: "React Native",
            description: "A mobile application project.",
        },
        {
            title: "ScienceArcade",
            technology: "React Native / Next.js / Supabase",
            description: "A website meant to gamefiy science curriculum.",
        },
    ];
    
    return (
        <section>
            <h2>My Projects</h2>

            <p>
                Here are some of the projects I have built.
            </p>

            {projects.map((project) => (
                <ProjectCard
                title={project.title}
                technology={project.technology}
                description={project.description}
                />
            ))}

        </section>
    );
}

export default Projects;