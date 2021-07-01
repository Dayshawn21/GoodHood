import MerchCard from "../components/MerchCard";
import client from "../shopify/shopify";

import merchStyle from "../styles/Merch.module.scss";

const Merchs = ({ products }) => {
  return (
    <section className="container text-center">
      <div>
        <h1 className=" text-6xl py-4">Merch </h1>
        <div className={merchStyle.grid}>
          {products &&
            products.map((product) => <MerchCard product={product} />)}
        </div>
      </div>
    </section>
  );
};
export const getStaticProps = async () => {
  // Fetch Products

  const products = await client.product.fetchAll();
  // return Products

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};

export default Merchs;
