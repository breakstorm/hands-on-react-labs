import {Project} from "./Project";
import ProjectCard from "./ProjectCard";

interface ProjectlistProps {
    projects: Project[];
}

export default function ProjectList({projects}: ProjectlistProps) {
    const items = projects.map((project: Project) => (
        <div className="cols-sm" key={project.id}>
            <ProjectCard project={project}/>
        </div>

    ))
    return (
        <div>
            <div className="row">
                {items}
            </div>
        </div>
    );
};