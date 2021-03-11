import { fromImagetoUrl, API_URL } from '../../utils/urls';
import styles from '../../styles/Home.module.scss';
import homeStyles from '../../styles/Hero.module.scss';

const Podcast = ({ podcast }) => {
	return (
		<div className='container'>
			<div className={styles.grid2}>
				<div>
					<img src={fromImagetoUrl(podcast.image)} alt='' />
					<p>Time {podcast.time}</p>
				</div>
				<div>
					<h1 className='text-center x-large'>
						Episode {podcast.episode}&#58; {podcast.title}
					</h1>

					<p className='lead'>{podcast.description}</p>
					<p>Date {podcast.upload}</p>
					<div className={homeStyles.socail}>
						<a
							href={podcast.apple}
							type='button'
							className='btn btn-outline-secondary'
						>
							<i className='fas fa-podcast'></i> Apple
						</a>
						<a
							href={podcast.spotify}
							type='button'
							className='btn btn-outline-secondary'
						>
							<i className='fab fa-spotify'></i> Spotify
						</a>
						<a
							href={podcast.youtube}
							type='button'
							className='btn btn-outline-secondary'
						>
							<i className='fab fa-youtube'></i> Youtube
						</a>
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
