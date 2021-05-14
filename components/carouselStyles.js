import styled from "styled-components";

const CarouselContainer = styled.div`
    margin-top: -2vh;
    [class^="number-slide"],
    [class*=" number-slide"] {
        background: grey;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        color: #fff;
        font-weight: 500;
        height: calc(70vh - 5vh);
        max-height: 100vh;
        cursor: pointer;
    }

    .number-slide1 {
        background: url("/bike-lesson.jpg");
        background-position: center;
        background-size: cover;

        &::after {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            /* background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.7) 0%,
                rgba(0, 0, 0, 0.3) 100%
            ); */
            z-index: 1;
        }
    }

    .number-slide2 {
        background: url("/Connected-Medical-Devices.jpg");
        background-position: center;
        background-size: cover;

        &::after {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            /* background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0.8) 60%,
                rgba(0, 0, 0, 0.3) 100%
            ); */
            z-index: 1;
        }
    }

    .number-slide3 {
        background: url("/family-fun.jpg");
        background-position: center;
        background-size: cover;
        position: relative;

        &::after {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            /* background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0.8) 60%,
                rgba(0, 0, 0, 0.3) 100%
            ); */
            z-index: 1;
        }
    }

    .number-slide4 {
        background: url("/team-building.jpg");
        background-position: center;
        background-size: cover;
        position: relative;

        &::after {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            /* background-color: rgba(0, 0, 0, 0.8); */
            background: rgba(0, 0, 0, 0.4);
            background-blend-mode: overlay;
            z-index: 1;
        }
    }

    .number-slide5 {
        background: url("/scissor-gloves.jpg");
        background-position: center;
        background-size: cover;
        position: relative;

        &::after {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            /* background-color: rgba(0, 0, 0, 0.8); */
            background: rgba(0, 0, 0, 0.6);
            background-blend-mode: overlay;
            z-index: 1;
        }
    }
    .number-slide6 {
        background: rgb(64, 76, 255);
        background: linear-gradient(
            128deg,
            rgba(64, 76, 255, 1) 0%,
            rgba(174, 63, 255, 1) 100%
        );
    }

    .navigation-wrapper {
        position: relative;

        & .content {
            width: 60%;
            height: 60%;
            display: grid;
            align-items: space-between;
            justify-items: center;
            place-items: center;
            h1 {
                width: 90%;
                font-size: 28px;

                @media screen and (min-width: 960px) {
                    width: 90%;
                }
            }
            p {
                font-size: 18px;
                line-height: 2;
                width: 90%;
                display: grid;
                justify-items: center;
                align-items: center;

                @media screen and (min-width: 960px) {
                    width: 40%;
                }
            }
        }
    }

    .dots {
        display: flex;
        padding: 10px 0;
        justify-content: center;
        position: absolute;
        z-index: 99;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
    }

    .dot {
        border: none;
        width: 10px;
        height: 10px;
        background: #c5c5c5;
        border-radius: 50%;
        margin: 0 5px;
        padding: 5px;
        cursor: pointer;
    }

    .dot:focus {
        outline: none;
    }

    .dot.active {
        background: #000;
    }

    .arrow {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        fill: #fff;
        cursor: pointer;
    }

    .arrow--left {
        left: 30px;
    }

    .arrow--right {
        left: auto;
        right: 30px;
    }

    .arrow--disabled {
        fill: rgba(255, 255, 255, 0.5);
    }

    .content {
        z-index: 2;
    }
`;

export { CarouselContainer };
