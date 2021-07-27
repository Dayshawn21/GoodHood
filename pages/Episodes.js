import Link from "next/link";
import { API_URL } from "../utils/urls";
import EspCard from "../components/EspCard";
import podcastStyle from "../styles/Podcast.module.scss";
const PER_PAGE = 9;
const Episodes = ({ podcasts, total, page }) => {
  const lastPage = Math.ceil(total / PER_PAGE);
  return (
    <div className="container text-center">
      <div>
        <h1 className=" text-6xl py-4"> Episodes </h1>
        <div className={podcastStyle.grid}>
          {podcasts && podcasts.map((podcast) => <EspCard podcast={podcast} />)}
        </div>
        <div className="py-3">
          {page > 1 && (
            <Link href={`/episodes?page=${page - 1}`}>
              <a class="hover:bg-blue-500 rounded-full text-xl py-2 px-3 font-semibold hover:text-white bg-blue-600 text-white">
                {" "}
                Prev
              </a>
            </Link>
          )}
          {page < lastPage && (
            <Link href={`/episodes?page=${page + 1}`}>
              <a class="hover:bg-blue-500 rounded-full text-xl py-2 px-3 font-semibold hover:text-white bg-blue-600 text-white">
                {" "}
                Next
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;
  // Total Products

  const total_res = await fetch(`${API_URL}/podcasts/count`);
  const total = await total_res.json();
  // Fetch Products

  const podcast_res = await fetch(
    `${API_URL}/podcasts?_sort=upload:DESC&_limit=${PER_PAGE}&_start=${start}`
  );
  const podcasts = await podcast_res.json();

  // return Products

  return {
    props: {
      podcasts,
      page: +page,
      total,
    },
  };
};

export default Episodes;
