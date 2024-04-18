import {Project} from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import React from "react";

interface ProjectlistProps {
    projects: Project[];
}

export default function ProjectList({projects}: ProjectlistProps) {
    const items = projects.map((project: Project) => (
        <div className="cols-sm" key={project.id}>
            <ProjectCard project={project}/>
            <ProjectForm />
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