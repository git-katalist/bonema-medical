import styled from "styled-components";
import { ContactNavigation } from "../components/layout/navigation";

export default function Contact() {
    return (
        <>
            <ContactNavigation />
            <ContactPage>
                <h1>I am the Contact PAGE</h1>
                <div
                    className="image"
                    style={{ height: "40vh", backgroundColor: "purple" }}
                >
                    Image
                </div>
                <div className="contact">
                    <div className="details">details</div>
                    <div className="form">the form</div>
                    <div className="map"></div>
                </div>
            </ContactPage>
        </>
    );
}

const ContactPage = styled.div`
    padding-top: 8vh;

    .contact {
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

    .details {
        grid-area: details;
        background-color: green;
    }

    .form {
        grid-area: form;
        background-color: teal;
    }

    .map {
        grid-area: map;
        background-color: yellow;
        height: 30vh;
    }
`;
