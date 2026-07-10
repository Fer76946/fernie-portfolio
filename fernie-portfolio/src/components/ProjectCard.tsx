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
        <div>
            <h3>{title}</h3>
            <p>{technology}</p>
            <p>{description}</p>
        </div>
    );
}
export default ProjectCard;