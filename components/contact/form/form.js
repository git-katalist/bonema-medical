import { useState } from "react";
import { Form } from "./styles";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sending");
        let data = {
            name,
            email,
            number,
            message,
        };
        fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log("Response received");
            if (res.status === 200) {
                console.log("Response succeeded!");
                setSubmitted(true);
                setName("");
                setEmail("");
                setNumber("");
                setMessage("");
            }
        });
    };

    return (
        <Form>
            <form>
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        className="no-outline"
                        type="text"
                        name="name"
                        id=""
                        placeholder="Your Name"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="no-outline"
                        type="email"
                        name="email"
                        id=""
                        placeholder="Your E-Mail Address"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="number">Contact Number</label>
                    <input
                        onChange={(e) => {
                            setNumber(e.target.value);
                        }}
                        className="no-outline"
                        type="tel"
                        name="number"
                        id=""
                        placeholder="Contact Number"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        className="no-outline"
                        name="message"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <input
                    type="submit"
                    onClick={(e) => {
                        handleSubmit(e);
                    }}
                />
            </form>
        </Form>
    );
}
