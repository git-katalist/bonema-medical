import styled from "styled-components";
const Supplier = styled.div`
    width: 100%;
    padding: 5rem 0;
    background-color: white;
    margin-bottom: 5rem;
    display: grid;
    place-items: center;

    .title {
        display: grid;
        place-items: center;
        margin-bottom: 5rem;

        h1 {
            display: inline-block;
            border-bottom: 1px solid #000;
        }
    }

    .container {
        width: 100%;
        max-width: 90rem;

        .suppliers {
            width: 100%;
            grid-gap: 50px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
            padding-left: 1.87rem;
            padding-right: 1.97rem;
            padding-bottom: 3rem;

            .supplier {
                display: grid;
                place-items: center;
                width: 100%;
            }

            img {
                width: 100%;
            }

            @media screen and (min-width: 64rem) {
                margin: 0 auto;
                grid-gap: 50px;
                display: grid;
                align-content: center;
                grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
            }
        }
    }
`;

export { Supplier };
