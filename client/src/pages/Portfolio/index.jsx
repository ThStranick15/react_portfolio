import ProjectCard from "./components/ProjectCard"

const projects = [
    {
        img: "/images/League.png",
        github: "https://github.com/ThStranick15/league_team_builder",
        name: "League Team Builder"
    },
    {
        img: "/images/Tech-Blog.png",
        github: "https://github.com/ThStranick15/tech_blog",
        name: "Tech Blog"
    },
    {
        img: "/images/Note-Taker.png",
        github: "https://github.com/ThStranick15/note_taker",
        name: "Note Taker"
    },
    {
        img: "/images/Weather.png",
        github: "https://github.com/ThStranick15/weather_dashboard",
        name: "Weather Dashboard"
    },
    {
        img: "/images/PWA.png",
        github: "https://github.com/ThStranick15/text_editor_pwa",
        name:"Text Editor PWA"
    },
    {
        img: "/images/Social_Network.png",
        github: "https://github.com/ThStranick15/social_network_api",
        name: "Social Network API"
    }
]

function Portfolio() {

    return(
        <section className="flex flex-col bg-slate-200 rounded p-3 text-black items-center text-center">
        <h1 className="text-3xl mb-2 bg-slate-400 rounded px-3 py-1">Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        {projects.map((project, index) => (
            <ProjectCard key={index} project={project}/>
        ))}
        </div>
        
        </section>
    )
}

export default Portfolio