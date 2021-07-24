import Head from "next/head";
import Nav from "./Navbar";
import Footer from "./Footer.js";
import layout from "../styles/Layout.module.scss";
import { CartProvider } from "../context/Store";

const Layout = ({ children }) => {
  return (
    <CartProvider>
      <div>
        <Head></Head>
        <Nav />

        <main> {children}</main>

        <Footer></Footer>
      </div>
    </CartProvider>
  );
};

export default Layout;
