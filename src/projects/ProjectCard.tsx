import {Project} from "./Project";

interface ProjectCardProps {
    project: Project;
}

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

export default function ProjectCard(props: ProjectCardProps): JSX.Element {
    const { project } = props;
    return (
            <div className="cols-sm">
                <div className="card">
                    <img src={project.imageUrl} alt={project.name}/>
                    <section className="section dark">
                        <h5 className="strong">
                            <strong>{project.name}</strong>
                        </h5>
                        <p>{formatDescription(project.description)}</p>
                        <p>Budget : {project.budget.toLocaleString()}</p>
                    </section>
                </div>
            </div>
    )
};