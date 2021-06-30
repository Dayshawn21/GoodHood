import Link from "next/link";
import styles from "../styles/Home.module.scss";
import MerchCard from "./MerchCard";

const Merch = ({ products }) => {
  return (
    <section className=" py-4 container text-center ">
      <div>
        <h2 className="text-5xl">Merch </h2>

        <div className={styles.grid3}>
          {products &&
            products.map((product, index) => (
              <MerchCard key={index} product={product} />
            ))}
        </div>
        <div className="py-3 text-center">
          <Link href="/Merch">
            <a className="bg-blue-500 text-xl rounded-full font-bold text-white px-4 py-4 transition duration-300 ease-in-out hover:bg-blue-600">
              More Merch
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Merch;
