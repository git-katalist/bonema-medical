import styled from "styled-components";

const Form = styled.div`
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
        margin-left: 30px;
        margin-top: 10px;
        margin-bottom: 5px;
        font-weight: 600;
        letter-spacing: 0.02rem;
        word-spacing: 0.3rem;

        @media screen and (min-width: 64rem) {
            margin-left: 30px;
        }
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="tel"]:focus,
    input[type="text"]:active,
    input[type="email"]:active,
    input[type="tel"]:active,
    textarea {
        width: 90%;
        border-radius: 7px;
        margin-left: 20px;
        border: none;
        box-shadow: inset 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: all 250ms ease-in;

        @media screen and (min-width: 64rem) {
            width: 80%;
        }
    }

    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="tel"]:focus,
    textarea {
        box-shadow: inset 0 2px 6px rgba(41, 171, 226, 0.3);
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"] {
        height: 40px;
        line-height: 40px;
        padding: 0.2rem 0.8rem;
    }

    textarea {
        padding: 0.5rem 0.5rem 0.2rem;
    }

    .no-outline:focus {
        outline: none;
    }

    input[type="submit"] {
        padding: 9px 20px;
        border: 1px solid transparent;
        background-color: #29abe2;
        color: white;
        -webkit-letter-spacing: 0.05rem;
        -moz-letter-spacing: 0.05rem;
        -ms-letter-spacing: 0.05rem;
        letter-spacing: 0.05rem;
        border-radius: 7px;
        cursor: pointer;
        -webkit-transition: all 250ms ease-in-out;
        transition: all 250ms ease-in-out;

        margin-top: 3vh;
        margin-left: 20px;
    }
`;

export { Form };
