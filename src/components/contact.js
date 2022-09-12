import React from "react"

export default function Contact(){
    const [form, setForm] = React.useState({
        name : "",
        subject: "",
        body : "this is my body"
    })
    function handleForm(event) {
        const {name, value, type, checked} = event.target
        setForm(prev => {
            return {
                ...prev,
                [name] : type === "checkbox" ? checked : value
            }
        })

    }
    console.log(form);
    function handleSubmit(event) {
        event.preventDefault()
        console.log("Howdy");
        setForm({
            name: "",
            subject: "",
            body : ""
        })
    }

    return (
        <div className="contact background">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleForm} />
                <input type="text" name="subject" placeholder="subject" value={form.subject} onChange={handleForm} />
                <textarea  name="body" placeholder="Body" value={form.body} onChange={handleForm} />
                <input type="submit" value="name" />
            </form>
        </div>
    )
}