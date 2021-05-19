import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import softwave from "../components/products/products.json";
import Carousel from "../components/carousel";

import Showcase from "../components/showCase";
import { Container } from "../styles/_layout";
import Suppliers from "../components/suppliers/suppliers";
import Accreds from "../components/accreditations";
import AboutBonema from "../components/about/aboutBonema";
import { HomeNavigation } from "../components/layout/navigation";

export default function Home() {
    return (
        <>
            <HomeNavigation />
            <div id="home" style={{ paddingTop: "8vh" }}>
                <Carousel />
            </div>

            <Suppliers />
            <div className="cards">
                {softwave.map((item, index) => (
                    <div key={index} className="card">
                        <div className="title">{item.title}</div>
                        <div className="image">
                            <Image
                                width={640}
                                height={640}
                                src={item.image}
                                alt=""
                            />
                        </div>
                        <div className="description">
                            {!!item.description ? `${item.description}` : " "}
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
                        <Link href="/contact">
                            <a className="enquiry">send enquiry</a>
                        </Link>
                    </div>
                ))}
            </div>
            <div id="about">
                <AboutBonema />
            </div>
            <Accreds />
        </>
    );
}

const Title = styled.h3``;
const Images = styled.div`
    padding: 0.97rem;
`;
