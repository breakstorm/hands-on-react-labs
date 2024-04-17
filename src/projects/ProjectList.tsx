import {Project} from "./Project";

interface ProjectlistProps {
    projects: Project[];
}

export default function ProjectList ({projects}: ProjectlistProps)  {
    return (
        <div>
            <div className="row">
                {projects.map((project: Project) => (
                    <div key={project.id}>
                        <div className="cols-sm">
                            <div className="card">
                                <img src={project.imageUrl} alt={project.name}/>
                                <section className="section dark">
                                    <h5 className="strong">
                                        <strong>{project.name}</strong>
                                    </h5>
                                    <p>{project.description}</p>
                                    <p>Budget : {project.budget}</p>
                                </section>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};