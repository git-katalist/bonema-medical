import { Form } from "./styles";

export default function ContactForm() {
    return (
        <Form>
            <form action="#">
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input
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
                        className="no-outline"
                        type="email"
                        name="email"
                        id=""
                        placeholder="Your E-Mail Address"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="contact-number">Contact Number</label>
                    <input
                        className="no-outline"
                        type="tel"
                        name="contact-number"
                        id=""
                        placeholder="Contact Number"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="no-outline"
                        name="message"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Your Message"
                    ></textarea>
                </div>
            </form>
        </Form>
    );
}
