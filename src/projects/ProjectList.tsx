import {Project} from "./Project";

interface ProjectlistProps {
    projects: Project[];
}

export default function ProjectList ({projects}: ProjectlistProps)  {
    return (
        <div>
            <pre>{JSON.stringify(projects, null, ' ')}</pre>
        </div>
    );
};