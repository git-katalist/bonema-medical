import { Container, Footer } from "../../styles/_layout";

export default function FooterElement() {
    return (
        <Footer>
            <Container>
                <div style={{ textAlign: "center", padding: "1rem 0rem" }}>
                    <p>
                        Copyright &copy; {new Date().getFullYear()} Bonema
                        Health. All rights reserved.
                    </p>
                </div>
            </Container>
        </Footer>
    );
}
