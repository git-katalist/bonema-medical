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
    input,
    input:focus,
    input:active,
    textarea {
        width: 90%;
        border-radius: 7px;
        margin-left: 20px;
        border: none;

        @media screen and (min-width: 64rem) {
            width: 80%;
        }
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

export { Form };
