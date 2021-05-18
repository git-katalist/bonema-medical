import FooterElement from "./footer";
import { Wrapper, Main } from "../../styles/_layout";

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Main>{children}</Main>
            <FooterElement />
        </Wrapper>
    );
};

export { Layout, FooterElement, Wrapper };
