import { useState } from "react";
import styled, { css } from "styled-components";
import { ContactNavigation } from "../components/layout/navigation";
import Toggle from "../components/toggle";

export default function Contact() {
    const [toggle, setToggle] = useState(true);
    const [togg, setTogg] = useState(false);
    const handleToggle = () => {
        setToggle(true);
        setTogg(false);
    };
    const handleTogg = () => {
        setToggle(false);
        setTogg(true);
    };

    return (
        <>
            <ContactNavigation />
            <ContactPage>
                <div className="image" style={{ height: "40vh" }}>
                    <div className="container">Image</div>
                </div>
                <div className="contact">
                    <div className="container">
                        <div className="details">
                            <Toggle />
                        </div>
                        <div className="form">
                            <h3>
                                Contact us by email or by filling out the form
                                below.
                            </h3>
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
                                    <label htmlFor="contact-number">
                                        Contact Number
                                    </label>
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
                        </div>
                    </div>
                </div>
            </ContactPage>
        </>
    );
}

const styledTitle = styled.h1`
    //some styles
    display: ${({ toggle }) => (toggle ? "none" : "block")};
`;

const ContactPage = styled.div`
    padding-top: 8vh;

    /* h1{
        
    } */

    .image {
        .container {
            width: 100%;
            max-width: 90rem;
            margin: auto;
        }
    }

    .contact {
        .container {
            width: 100%;
            max-width: 90rem;
            margin: auto;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-areas:
                "details"
                "form"
                "map";

            @media screen and (min-width: 64rem) {
                grid-template-columns: 5fr 7fr;
                grid-template-areas:
                    "details form"
                    "map map";
            }
        }
    }

    .details {
        grid-area: details;
        /* background-color: green; */
        padding-left: 30px;

        .title {
            font-weight: bolder;
            letter-spacing: 0.05rem;
        }

        ul {
            list-style-type: none;
        }
    }

    .form {
        grid-area: form;
        /* background-color: teal; */
    }

    .map {
        grid-area: map;
        /* background-color: yellow; */
        height: 30vh;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        font-family: "Nunito", sans-serif;
        font-size: 14px;
        text-transform: uppercase;

        + .input-group {
            margin-top: 10px;
        }
    }

    label {
        margin-left: 50px;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    input,
    input:focus,
    input:active,
    textarea {
        width: 80%;
        border-radius: 7px;
        margin-left: 40px;
        border: none;
    }

    input {
        height: 30px;
        line-height: 30px;
        padding: 0.2rem 0.5rem;
    }

    textarea {
        padding: 0.2rem 0.5rem;
    }

    .no-outline:focus {
        outline: none;
    }
`;
