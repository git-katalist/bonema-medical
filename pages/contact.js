import { useState } from "react";
import styled from "styled-components";
import ContactDetails from "../components/contact/address/contact";
import { ContactNavigation } from "../components/layout/navigation";

export default function Contact() {
    return (
        <>
            <ContactNavigation />
            <Hero>
                {/* <img style={{ width: "100%" }} src="/stethoscope.jpg" alt="" /> */}
                <div className="content">
                    <h1>
                        Bonema <br />
                        <span id="enquiry">Medical</span>
                    </h1>
                </div>
            </Hero>
            <ContactDetails />
        </>
    );
}

const Hero = styled.section`
    /* position: relative; */
    height: 80vh;
    background-image: url("/stethoscope.jpg");
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: multiply;
    background-size: cover;
    display: grid;
    place-items: center;

    &::before {
        width: 100%;
        height: 100%;
    }
    img {
    }

    .content {
        content: "";
        position: absolute;
        width: 100%;
        top: 15%;
        left: 0;
        display: grid;
        place-items: center;
        line-height: 0.8;

        @media screen and (min-width: 64rem) {
            top: 20%;
        }

        h1 {
            font-size: 4rem;
            color: #2e3191;
            text-align: center;
            text-shadow: 0 1px 3px rgba(249, 249, 249, 0.7);

            span {
                font-size: 3rem;
                color: #f2f5f9;
                text-shadow: 0 1px 3px #2e3191;
            }

            @media screen and (min-width: 64rem) {
                font-size: 8rem;

                span {
                    font-size: 6rem;
                }
            }
        }
    }
`;
