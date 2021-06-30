import { fromImagetoUrl, API_URL } from "../../utils/urls";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";

const Podcast = ({ podcast }) => {
  console.log(podcast);
  return (
    <div className="container py-4">
      <div className="grid md:grid-cols-2 ">
        <div>
          <Image
            src={podcast.image.formats.large.url}
            width="400"
            height="400"
          />
          <div className="grid grid-cols-2 gap-12">
            <h1 className="text-lg">{podcast.upload}</h1>
            <h1 className="text-lg">{podcast.time} Min</h1>
          </div>
        </div>
        <div>
          <h1 className="text-4xl">
            EP{podcast.episode}| {podcast.title}
          </h1>

          <h2 className="text-xl pt-3"> Episode Description</h2>

          <p className="text-lg ">{podcast.description} </p>

          <div className="flex pt-3 text-center ">
            <div>
              <a
                href="https://podcasts.apple.com/us/podcast/good-in-the-hood-podcast/id1454831531"
                type="button"
                className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600"
              >
                <i className="fas fa-podcast "></i>
                Apple
              </a>
            </div>
            <div className="px-3">
              <a
                href="https://open.spotify.com/show/3rClGGBu1MvCFDrNb9Klql?si=2_EN6TPFQZC7MHLJugQkuQ&nd=1"
                type="button"
                className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600"
              >
                <i className="fab fa-spotify"></i> Spotify
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/channel/UCrPlrMJowXVgWUW9yWfP7pg"
                type="button"
                className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 "
              >
                <i className="fab fa-youtube"></i> Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getStaticProps({ params: { slug } }) {
  const podcast_res = await fetch(`${API_URL}/podcasts/?slug=${slug}`);
  const found = await podcast_res.json();

  return {
    props: {
      podcast: found[0],
    },
  };
}

export async function getStaticPaths() {
  //Retrieve all the possible paths

  const podcasts_res = await fetch(`${API_URL}/podcasts/`);
  const podcasts = await podcasts_res.json();

  //Return them to NextJS context

  return {
    paths: podcasts.map((podcast) => ({
      params: { slug: String(podcast.slug) },
    })),

    fallback: false,
  };
}
export default Podcast;
