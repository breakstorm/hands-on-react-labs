import {MOCK_PROJECTS} from "./MockProjects";
import ProjectList from "./ProjectList";
import {Project} from "./Project";
import {useState} from "react";

export default function ProjectsPage() {
    const [projects, setProjects] = useState(MOCK_PROJECTS);
    const saveProject = (project: Project) => {
        console.log("ProjectsPage ::: saveProject ::: ", project);
        let updatedprojects = projects.map((p: Project) => {
            return p.id === project.id ? project : p;
        })
        setProjects(updatedprojects);
    };
    return (
        <>
            <h1>Projects</h1>
            <ProjectList
                projects={projects}
                onSave={saveProject}
            ></ProjectList>
        </>
    );
};