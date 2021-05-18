import styled from "styled-components";
import { Header, Container } from "../../styles/_layout";
import { PageLink } from "../../styles/_layout";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    height: 100%;

    a {
        display: flex;
        text-decoration: none;
        color: grey;
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: bolder;
        align-items: center;
        padding: 0.5rem 1rem;
        height: 100%;
        cursor: pointer;
    }
`;
const Logo = styled.div`
    display: flex;
    height: 8vh;
    align-items: center;
`;
const Menu = styled.ul`
    display: flex;
    height: 8vh;
    align-items: center;
`;

const HomeNavigation = () => {
    return (
        <Header>
            <Container>
                <Nav>
                    <Logo>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            <img
                                style={{ height: "4vh" }}
                                src="/logo.svg"
                                alt=""
                            />
                        </Link>
                    </Logo>
                    <Menu>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            home
                        </Link>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            about
                        </Link>
                        <PageLink href="/contact">contact</PageLink>
                    </Menu>
                </Nav>
            </Container>
        </Header>
    );
};

const ContactNavigation = () => {
    return (
        <Header>
            <Container>
                <Nav>
                    <Logo>
                        <PageLink href="/">
                            <a>
                                <img
                                    style={{ height: "4vh" }}
                                    src="/logo.svg"
                                    alt=""
                                />
                            </a>
                        </PageLink>
                    </Logo>
                    <Menu>
                        <PageLink href="/#home">
                            <a>home</a>
                        </PageLink>
                        <PageLink href="/#about">
                            <a>about</a>
                        </PageLink>
                        <PageLink href="/contact">
                            <a>contact</a>
                        </PageLink>
                    </Menu>
                </Nav>
            </Container>
        </Header>
    );
};

export { HomeNavigation, ContactNavigation };
