import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "@next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const inter = Manrope({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
