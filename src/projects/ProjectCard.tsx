import {Project} from "./Project";
import {Link} from "react-router-dom";

interface ProjectCardProps {
    project: Project;
    onEdit: (project: Project) => void;
}

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

export default function ProjectCard(props: ProjectCardProps): JSX.Element {
    const { project
            ,onEdit
    } = props;

    function handleEditClick(project: Project): void {
        // console.log('Edit project:', project)
        onEdit(project);
    }

    return (
        <div className="cols-sm">
            <div className="card">
                <img src={project.imageUrl} alt={project.name}/>
                <section className="section dark">
                    <Link to={'/projects/' + project.id}>
                        <h5 className="strong">
                            <strong>{project.name}</strong>
                        </h5>
                        <p>{formatDescription(project.description)}</p>
                        <p>Budget : {project.budget.toLocaleString()}</p>
                    </Link>

                    <button className="bordered"
                      onClick={() => handleEditClick(project)}
                    >
                        <span className="icon-edit"></span>
                        Edit
                    </button>
                </section>
            </div>
        </div>
    );
};