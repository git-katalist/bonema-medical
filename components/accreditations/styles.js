import styled from "styled-components";

const Accreditations = styled.div`
    box-shadow: 0 3px 12px 12px rgba(1, 1, 1, 0.1),
        0 6px 24px 0px rgba(1, 1, 1, 0.3), 0 8px 26px 0px rgba(1, 1, 1, 0.3),
        0 10px 30px 0px rgba(1, 1, 1, 0.1);
    padding: 3rem 0;
    .title {
        display: grid;
        place-items: center;
        h2 {
            font-size: 2rem;
            display: inline-block;
            border-bottom: 1px solid gray;
        }
    }
    .container {
        width: 90rem;
        max-width: 100%;
        margin: auto;
        padding: 2rem 1.97rem;
        .items {
            grid-gap: 40px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
            margin-top: 2rem;
            padding: 2rem 0rem;
            .item {
                display: grid;
                place-items: center;
                /* width: 640px; */
                cursor: pointer;
            }

            @media screen and (min-width: 90rem) {
                grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
                grid-gap: 100px;
                padding: 1.97rem 0rem;
            }
        }

        @media screen and (min-width: 90rem) {
            padding: 0;
        }
    }
    img {
        /* width:640px; */
        width: 100%;
    }
`;

export { Accreditations };
