import Head from "next/head";

import Router from "next/router";
import Mic from "../components/Mic";
import Espisodes from "../components/Episodes";
import Merch from "../components/Merch";
import Contact from "../components/Contactform";

import { API_URL } from "../utils/urls";
import Header from "../components/Header";
import { getAllProductsInCollection } from "../shopify/shopify";

const Home = ({ podcasts, products }) => {
  if (process.browser) {
    //Runs only on client side
  }
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
  const podcast_res = await fetch(
    `${API_URL}/podcasts?_sort=upload:DESC&_limit=8`
  );
  const podcasts = await podcast_res.json();

  // return Products
  // const products = await client.product.fetchAll();
  const products = await getAllProductsInCollection();
  return {
    props: {
      podcasts,
      products,
      // products: JSON.parse(JSON.stringify(products)),
      revalidate: 100,
    },
  };
};

export default Home;
