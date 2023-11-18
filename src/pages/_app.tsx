import Layout from "../components/layout";
import "../styles/globals.css";
import "../styles/mapbox-gl.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "../context/themeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
