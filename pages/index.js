import Head from "next/head";

import client from "../shopify/shopify";
import Mic from "../componets/Mic";
import Espisodes from "../componets/Episodes";
import Merch from "../componets/Merch";
import Contact from "../componets/Contactform";

import { API_URL } from "../utils/urls";
import Header from "../componets/Header";

const Home = ({ podcasts, products }) => {
  console.log(products);
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
    },
  };
};

export default Home;
