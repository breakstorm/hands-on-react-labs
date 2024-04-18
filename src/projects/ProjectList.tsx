import {Project} from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import React, {useState} from "react";

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({projects}: ProjectListProps) {
    const handleEdit = (project: Project) => {
        console.log('ProjectList ::: handleEdit ::: ', project)
        setProjectBeingEdited(project);
    };

    const handleCancel = () => {
        console.log('ProjectList ::: handleCancel ::: ')
        setProjectBeingEdited({});
    }

    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    return (
        <div>
            <div className="row">
                {projects.map((project) => (
                        <div className="cols-sm" key={project.id}>
                            {(project === projectBeingEdited)
                            ? (<ProjectForm
                                project={project}
                                onCancel={handleCancel}
                                />)
                            : (<ProjectCard
                                project={project}
                                onEdit={handleEdit}
                            ></ProjectCard>)
                            }
                        </div>
                    )
                )}
            </div>
        </div>
    )
};