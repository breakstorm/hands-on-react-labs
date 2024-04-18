import {Project} from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import React from "react";

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({projects}: ProjectListProps) {
    const handleEdit = (project: Project) => {
        console.log('ProjectList :::', project)
    }

    const items = projects.map((project: Project) => (
        <div className="cols-sm" key={project.id}>
            <ProjectCard
                project={project}
                onEdit={handleEdit}
            />
            <ProjectForm />
        </div>
    ))



    return (
        <div>
            <div className="row">
                {items}
            </div>
        </div>
    )
};