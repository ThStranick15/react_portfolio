import Form from "./components/Form"

function Contact() {
    return(
        <section className="flex flex-col bg-slate-200 rounded p-3 text-black items-center text-center">
            <h1 className="text-3xl mb-2 bg-slate-400 rounded px-3 py-1">Contact Me</h1>
            <Form/>
        </section>
        
    )
}

export default Contact