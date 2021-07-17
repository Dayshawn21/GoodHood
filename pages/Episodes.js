import { API_URL } from "../utils/urls";
import EspCard from "../components/EspCard";
import podcastStyle from "../styles/Podcast.module.scss";
const Episodes = ({ podcasts }) => {
  return (
    <div className="container text-center">
      <div>
        <h1 className=" text-6xl py-4"> Episodes </h1>
        <div className={podcastStyle.grid}>
          {podcasts && podcasts.map((podcast) => <EspCard podcast={podcast} />)}
        </div>
      </div>
    </div>
  );
};
export const getStaticProps = async () => {
  // Fetch Products

  const podcast_res = await fetch(`${API_URL}/podcasts`);
  const podcasts = await podcast_res.json();

  // return Products

  return {
    props: {
      podcasts,
      revalidate: 100,
    },
  };
};

export default Episodes;
