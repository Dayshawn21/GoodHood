import { fromImagetoUrl, API_URL } from '../../utils/urls';
import styles from '../../styles/Home.module.scss';

const Podcast = ({ podcast }) => {
	return (
		<div className={styles.grid2}>
			<div>
				<img src={fromImagetoUrl(podcast.image)} alt='' />
			</div>
			<div>
				<h3>{podcast.title}</h3>
				<p>${podcast.time}</p>
				<p>{podcast.description}</p>
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
