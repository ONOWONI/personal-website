import React from "react"

export default function Contact(){
    const [form, setForm] = React.useState({
        name : "",
        subject: "",
        body : ""
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

    function handleSubmit(event) {
        event.preventDefault()
        if (form.body === "") {
            console.log("not ready");
        } else {

            setForm({
                name: "",
                subject: "",
                body : ""
            })
        }
    }


    return (
        <div className="contact background">
            <h1>I want to hear from you</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h4>Send me an email</h4>
                    <div className="input">
                        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleForm} />
                        <input type="text" name="subject" placeholder="subject" value={form.subject} onChange={handleForm} />
                    </div>
                </div>
                <textarea  name="body" placeholder="Body" value={form.body} onChange={handleForm} />
                <input type="submit" value="Send" className="btn" />
            </form>
        </div>
    )
}