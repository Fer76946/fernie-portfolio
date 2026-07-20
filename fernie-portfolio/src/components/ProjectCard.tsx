type ProjectCardProps = {
  title: string;
  technology: string;
  description: string;  
};

function ProjectCard({
    title,
    technology,
    description,
}: ProjectCardProps) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{technology}</p>
            <p>{description}</p>

            <button>
                View Project
            </button>
        </div>
    );
}
export default ProjectCard;