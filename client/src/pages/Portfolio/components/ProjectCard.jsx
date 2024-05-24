function ProjectCard (props) {
    return(
        <div className="text-xl mb-2 bg-slate-400 rounded p-3 text-white">
            
            <a className="hover:underline" href={props.project.github}><img className="w-100" src={props.project.img} alt="Project Image" />{props.project.name}</a>
        </div>
    )
}

export default ProjectCard