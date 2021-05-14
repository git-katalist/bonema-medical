import { Container, Footer } from "../../styles/_layout";

export default function FooterElement() {
    return (
        <Footer>
            <Container>
                <div style={{ textAlign: "center", padding: "1rem 0rem" }}>
                    &copy; Copyrigh {new Date().getFullYear()}
                </div>
            </Container>
        </Footer>
    );
}
