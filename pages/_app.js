import { ThemeProvider } from "styled-components";
import { Layout } from "../components/layout/layout";
import { GlobalStyle } from "../styles/globalStyles";
import { theme } from "../styles/Theme";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
