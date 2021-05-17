import styled from "styled-components";

const About = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    padding: 5rem 1.97rem;
    background-color: white;
    margin-top: 5rem;

    .title {
        display: grid;
        place-items: center;
        margin-bottom: 5rem;

        h1 {
            display: inline-block;
            border-bottom: 1px solid #111;
        }
    }

    .container {
        width: 100%;
        max-width: 90rem;

        p {
            line-height: 2;
            font-size: 18px;
        }
    }
`;

export { About };
