import Link from "next/link";

import styles from "../styles/Home.module.scss";

import EspCard from "./EspCard";

const Episodes = ({ podcasts }) => {
  return (
    <section className="container text-center py-4">
      <div>
        <h2 className="text-5xl">Latest Episodes</h2>

        <div className="grid md:grid-cols-3 gap-4 ">
          {podcasts && podcasts.map((podcast) => <EspCard podcast={podcast} />)}
        </div>
        <div className="py-3 text-center">
          <Link href="/Episodes">
            <a className="bg-blue-500 text-xl rounded-full font-bold text-white px-4 py-4 transition duration-300 ease-in-out hover:bg-blue-600 ">
              More Episodes{" "}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Episodes;
