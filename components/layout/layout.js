import FooterElement from "./footer";
import Navigation from "./navigation";
import { Wrapper, Main } from "../../styles/_layout";

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Navigation />
            <Main>{children}</Main>
            <FooterElement />
        </Wrapper>
    );
};

export { Layout, FooterElement, Navigation, Wrapper };
