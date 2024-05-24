import { useState } from "react"

const initialFormValues = {
    name: 'Name',
    email: 'Email@email.com',
    message: 'Message'
}

const checkEmail = (email) => {
    return /.+@.+\.[A-Za-z]+$/.test(email)
}


function Form () {
    const [formData, setFormData] = useState(initialFormValues)

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    return (
        <section className="w-1/4">
            <form className="flex flex-col" action="">
                <input className="m-2 p-2 rounded" name="name" id="name" type="text" placeholder="Name" required onChange={handleInputChange}/>
                {!formData.name && <p className="text-red-500 font-bold">Name Required</p>}
                <input className="m-2 p-2 rounded" name="email" id="email" type="email" placeholder="Email" required onChange={handleInputChange}/>
                {!formData.email && <p className="text-red-500 font-bold">Email Required</p>}
                {!checkEmail(formData.email) && <p className="text-red-500 font-bold">Invalid Email</p>}
                <textarea className="m-2 p-2 rounded" rows="3" name="message" id="message" placeholder="Enter your Message" onChange={handleInputChange}></textarea>
                {!formData.message && <p className="text-red-500 font-bold">Message Required</p>}
                <button className="m-2 p-2 rounded bg-slate-400 hover:bg-slate-500">Submit</button>
            </form>
        </section>
    )
}

export default Form