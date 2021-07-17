import Head from "next/head";

import client from "../shopify/shopify";
import Mic from "../components/Mic";
import Espisodes from "../components/Episodes";
import Merch from "../components/Merch";
import Contact from "../components/Contactform";

import { API_URL } from "../utils/urls";
import Header from "../components/Header";

const Home = ({ podcasts, products }) => {
  return (
    <div>
      <Header></Header>
      <Espisodes podcasts={podcasts}></Espisodes>
      <Merch products={products} />

      <Mic />
      <Contact />
    </div>
  );
};

export const getStaticProps = async () => {
  const podcast_res = await fetch(`${API_URL}/podcasts?_limit=3`);
  const podcasts = await podcast_res.json();

  // return Products
  const products = await client.product.fetchAll();

  return {
    props: {
      podcasts,
      products: JSON.parse(JSON.stringify(products)),
      revalidate: 100,
    },
  };
};

export default Home;
