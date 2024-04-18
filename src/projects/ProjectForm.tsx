import {Project} from "./Project";
import {SyntheticEvent} from "react";

interface ProjectFormProps {
    project: Project;
    onSave: (project: Project) => void;
    onCancel: () => void;
}

export default function ProjectForm({project, onSave, onCancel}:ProjectFormProps):JSX.Element {
    // const {project, onCancel} = props;


    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        onSave(new Project({name: 'Updated Project'}));
    }

    return (
        <form className="input-group vertical" onSubmit={handleSubmit}>
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" placeholder="enter name"
                value={project.name}
            />

            <label htmlFor="description">Project Description</label>
            <textarea name="description" placeholder="enter description"
                value={project.description}
            ></textarea>


            <label htmlFor="budget">Project Budget</label>
            <input type="number" name="budget" placeholder="enter budget"
                value={project.budget}
            />

            <label htmlFor="isActive">Active?</label>
            <input type="checkbox" name="isActive"
                checked={project.isActive}
            />

            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span></span>
                <button type="button" className="bordered medium"
                    onClick={onCancel}
                >cancel</button>
            </div>
        </form>
    )
}