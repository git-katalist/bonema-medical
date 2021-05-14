import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import softwave from "../components/products/products.json";
import Carousel from "../components/carousel";

import Showcase from "../components/showCase";
import { Container } from "../styles/_layout";
import Suppliers from "../components/suppliers";

export default function Home() {
    console.log(softwave);

    // const items = softwave.map((item, index) => <div>{item.title}</div>);

    return (
        <>
            <div id="home">
                <Carousel />
                {/* <Showcase /> */}
                {/* <Container>
                    <h1>Good Morning Bonema Medical</h1>
                </Container> */}
            </div>
            <div className="info" style={{ paddingTop: "50px" }}>
                <h1>Products</h1>
                {/* <div className="cards">
                    <div className="card">
                        <Link href="#">
                            <a>
                                <Title>SKIN & BODY</Title>
                                <Images></Images>
                            </a>
                        </Link>
                    </div>
                    <div className="card">
                        <Link href="#">
                            <a>
                                <Title>wellness</Title>
                                <Images></Images>
                            </a>
                        </Link>
                    </div>
                    <div className="card">
                        <Link href="#">
                            <a>
                                <Title>medical</Title>
                                <Images></Images>
                            </a>
                        </Link>
                    </div>
                    <div className="card">
                        <Link href="#">
                            <a>
                                <Title>pharmaceutical</Title>
                                <Images></Images>
                            </a>
                        </Link>
                    </div>
                    <div className="card">
                        <Link href="#">
                            <a>
                                <Title>animal health</Title>
                                <Images className="images">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Obcaecati fugiat
                                    asperiores tempora, atque ratione, neque
                                    nulla vel laboriosam iste cupiditate
                                    explicabo repudiandae, dolor qui debitis
                                    nesciunt reiciendis doloremque cum porro.
                                </Images>
                            </a>
                        </Link>
                    </div>
                    <div className="card">
                        <Link href="#">
                            <a>
                                <Title>bioscience</Title>
                                <Images></Images>
                            </a>
                        </Link>
                    </div>
                </div> */}
            </div>
            <Suppliers />
            <div className="cards">
                {softwave.map((item, index) => (
                    <div key={index} className="card">
                        <div className="title">{item.title}</div>
                        <div className="image">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="description">
                            {!!item.description
                                ? `${item.description.substr(1, 100)}`
                                : ""}
                        </div>
                        <ul className="product-list">
                            {item.products.map((sub, index) => (
                                <li key={index}>
                                    <span className="list-marker">
                                        &#10003;
                                    </span>{" "}
                                    {sub.name}
                                </li>
                            ))}
                        </ul>
                        <Link href="#">
                            <a className="enquiry">send enquiry</a>
                        </Link>
                    </div>
                ))}
            </div>
            <Container
                id="about"
                style={{ marginTop: "50px", marginBottom: "50px" }}
            >
                <div>
                    Bonema is an Award winning, accredited and registered
                    medical device distributor to hospitals, Clinics and retail
                    pharmacies. Our clientele includes to name a few, Netcare
                    Group, Louis Pasteur Holdings Group, Phelang Bonolo
                    Healthcare Group and Sedibeng Hospital, in this process we
                    have accumulated a great deal of experience in servicing
                    clients and delivering on time, servicing Southern Africa.
                    Bonema is also the sole distributor for Sofwave, 1drop and
                    Mecan in Southern Africa and a Fotona, Phillips and
                    BioMaxima SA certified reseller. We have built relationships
                    with trusted and certified manufacturers and logistics
                    companies globally. We have offices in South Africa,
                    Botswana and Swaziland with clientele in Africa, China,
                    Australia and United States of America.
                </div>
            </Container>
        </>
    );
}

const Title = styled.h3``;
const Images = styled.div`
    padding: 0.97rem;
`;
