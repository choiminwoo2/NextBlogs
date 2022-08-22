import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store/index";
import Layout from "../components/layout/Layout";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
