
function About() {
    return(
        <section className="flex flex-col bg-slate-200 rounded p-3 text-black items-center text-center">
            <h1 className="text-3xl mb-2 bg-slate-400 rounded px-3 py-1">About Me</h1>
            <img className="w-96 mb-2" src='/images/Thomas_Stranick.jpg' alt="Profile Picture" />
            <p className='mb-2 text-lg'>Hi, my name is Thomas Stranick and I am a Full-Stack Developer. I have almost completed the Rutgers Coding Bootcamp and have an Electrical Engineering Degree from Lafayette College.</p>
            <p className='text-lg'>Please take a look around my website and view some of the projects I have worked on!</p>
        </section>
        
    )
}

export default About