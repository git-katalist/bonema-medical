import styled from "styled-components";
import { Header, Container } from "../../styles/_layout";
import Link from "next/link";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6vh;

    a {
        text-decoration: none;
        color: grey;
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: bolder;
    }
`;
const Logo = styled.div``;
const Menu = styled.ul`
    display: flex;

    a {
        display: inline-block;
        padding: 0.5rem 1rem;
    }
`;

export default function Navigation() {
    return (
        <Header>
            <Container>
                <Nav>
                    <Logo>
                        <Link href="/">
                            <a>
                                <img
                                    style={{ height: "4vh" }}
                                    src="/bonema-logo.png"
                                    alt=""
                                />
                            </a>
                        </Link>
                    </Logo>
                    <Menu>
                        <Link href="/#home">
                            <a>home</a>
                        </Link>
                        <Link href="/#about">
                            <a>about</a>
                        </Link>
                        <Link href="/contact">
                            <a>contact</a>
                        </Link>
                    </Menu>
                </Nav>
            </Container>
        </Header>
    );
}
