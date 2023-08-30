import React from "react";
import emailjs from "emailjs-com";
import twitter from "../img/twitter-1.svg"
import linkedin from "../img/linkedin-1.svg"
import github from "../img/github-3.svg"




export default function Contact(){

    const [form, setForm] = React.useState({
        name : "",
        email: "",
        body : "",
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
    function handleFocus(event) {
        const {name, type, checked} = event.target
        setForm(prev => {
            return {
                ...prev,
                [name] : type === "checkbox" ? checked : ""
            }
        })
    };




    function handleSubmit(event) {
        event.preventDefault()

        if (form.body === "") {
            setForm(prev => {
                return {
                    ...prev,
                    body : "*Required"
                }
            })
        } else if (form.body === "*Required") {
            setForm(prev => {
                return {
                    ...prev,
                    body : "*Required"
                }
            })
        }if (form.email === "") {
            setForm(prev => {
                return {
                    ...prev,
                    email : "*Required"
                }
            })
        } else {
            emailjs.send(
                'service_8y2gmam',
                'template_dawehza',
                form,
                'qOylR5Dl-SnL-IHkB'
                )
                .then((response) => {
                    // console.log('SUCCESS!', response.status, response.text);
                    console.log("Success");
                })
                .catch((err) => {
                    // console.log('FAILED...', err);
                    console.log("Error")
                });
                setForm({
                    name: "",
                    email: "",
                    body : ""
                })
        };
    }

    const styles = {
        color : form.body === "*Required" ?  "#f53838cc" :  "#979696"
    }


    return (
        <div className="contact">
            <p className="contact-intro-text">I am available to discuss working together. Please contact me at your earliest<br/> convenience.</p>
            <form onSubmit={handleSubmit}>
                <p>Send me an email</p>
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleForm} onFocus={handleFocus} />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleForm} onFocus={handleFocus} />
                <textarea  name="body" placeholder="Body" value={form.body} onChange={handleForm} style={styles} id="body-text-area" onFocus={handleFocus} />
                <input type="submit" value="Send" className="btn" />
            </form>
            {/* <div className="sent-feedback-container">
                <h1>Sent</h1>
                <p>I get back between two business days</p>
                <button className="btn">Close</button>
            </div> */}
            <div className="icon-container">
                <a href='https://github.com/ONOWONI' target="_blank" rel="noreferrer" className="social-icon">
                    <div>
                        <img src={github} alt="github-logo"></img>
                    </div>
                </a>
                <a href='https://linkedin.com/in/daniel-onowoni' target="_blank" className="social-icon" rel="noreferrer">
                    <div>
                        <img src={linkedin} alt="linkedin-logo"></img>
                    </div>
                </a>
                <a href='https://twitter.com/DOnowoni' target="_blank" className="social-icon" rel="noreferrer">
                    <div>
                        <img src={twitter} alt="twitter-logo"></img>
                    </div>
                </a>
            </div>
        </div>
    )
}