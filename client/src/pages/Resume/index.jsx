function Resume() {
    return(
        <section className="flex flex-col bg-slate-200 rounded p-3 text-black items-center">
            <h1 className="text-3xl mb-2 bg-slate-400 rounded px-3 py-1">Resume</h1>
            <p className="m-2 p-2 bg-blue-200">Download my resume here: <a className="hover:underline font-bold" href="/Stranick, Thomas Resume.pdf" download>Thomas Stranick Resume</a></p>
            <ul className="m-2 list-disc">
                <h2 className="text-xl mb-2 bg-blue-300 rounded px-3 py-1">Front End Proficiencies</h2>
                <li>React</li>
                <li>Handlebars</li>
                <li>HTML</li>
                <li>Bootstrap CSS</li>
                <li>Tailwind CSS</li>
                <li>CSS</li>
            </ul>
            <ul className=" m-2 list-disc">
                <h2 className="text-xl mb-2 bg-blue-300 rounded px-3 py-1">Back End Proficiencies</h2>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
            </ul>
        </section>
    )
}

export default Resume