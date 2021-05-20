import styled from "styled-components";

const Contact = styled.section`
    .buttons {
        display: flex;
        gap: 2rem;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
    }

    button {
        padding: 9px 16px;
        border: 1px solid transparent;
        background-color: #29abe2;
        color: white;
        letter-spacing: 0.05rem;
        border-radius: 7px;
        cursor: pointer;
        transition: all 250ms ease-in-out;

        &:hover {
            border: 1px solid #29abe2;
            background-color: white;
            color: #29abe2;
            /* padding: 6px 13px; */
        }

        &.active {
            border: 1px solid #29abe2;
            background-color: white;
            color: #29abe2;

            &:hover {
                border: 1px solid #29abe2;
                background-color: #29abe2;
                color: white;
                /* padding: 6px 13px; */
            }
        }
    }

    .direct-contact {
        max-width: 90rem;
        margin: auto;
    }

    .boxes {
        display: flex;
        gap: 5rem;
        margin-top: 2rem;

        ul {
            list-style-type: none;
        }
    }

    .map {
        width: 100%;
        height: 60vh;
        margin-top: 5vh;
        display: grid;
        place-items: center;
        padding: 1rem 0 3rem;
        background-color: white;
        box-shadow: 0px 1px 10px #444;

        .container {
            width: 100%;
            max-width: 90rem;
            height: 100%;
            max-height: 50vh;
        }
    }
`;

const Information = styled.div`
    .container {
        max-width: 90rem;
        padding: 1.97rem;
        margin: auto;
        padding-top: 5rem;
    }

    .selectionButtons {
        height: 4rem;
        display: flex;
        gap: 3rem;
        align-items: center;
    }

    .contact-content {
        display: grid;
        grid-template-columns: 1fr;
        padding-bottom: 4rem;

        @media screen and (min-width: 64rem) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .contact-details {
        /* padding: 3rem 0; */
        display: grid;
        grid-template-columns: 1fr;
        padding-bottom: 3rem;
        padding-top: 2rem;

        @media screen and (min-width: 640px) {
            grid-template-columns: repeat(2, 1fr);
        }

        .address {
            padding-bottom: 3rem;
        }

        .contacts {
            ::before {
                content: "contact details";
                display: block;
                text-transform: capitalize;
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: 1rem;
                text-decoration: underline;

                @media screen and (min-width: 640px) {
                    display: none;
                }
            }

            span a {
                text-decoration: none;
                color: #29abe2;
                margin-left: 0.5rem;
            }
        }

        ul {
            list-style-type: none;

            li {
                height: 2rem;
                line-height: 2rem;
            }
        }
    }
`;

export { Contact, Information };
