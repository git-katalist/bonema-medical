import styled from "styled-components";

const Wrapper = styled.div`
    /* display: grid;
    height: 100%; */
    /* grid-auto-rows: auto 1fr auto; */
    background-color: #f4f5f5;
`;

const Main = styled.main`
    /* background-color: teal; */
    padding-top: 8vh;
    min-height: calc(100vh - 43px);
`;

const Header = styled.header`
    /* padding: 0 1.74rem; */
    position: fixed;
    background-color: #f4f5f5;
    z-index: 9999;
    width: 100%;
    height: 6vh;
    box-shadow: 0px 1px 10px #444;
`;
const Container = styled.div`
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 0.9rem;
`;

const NavWrapper = styled.nav`
    /* background-color: green; */

    h1,
    h1::before,
    h1::after {
        margin: 0;
        padding: 0;
    }
`;

const Footer = styled.footer`
    background-color: #0a3b61;
    color: #f2f5f9;
`;

export { Container, NavWrapper, Wrapper, Header, Main, Footer };
