import Espisodes from '../componets/Episodes';
import { API_URL } from '../utils/urls';
import EspCard from '../componets/EspCard';
import podcastStyle from '../styles/Podcast.module.scss';
const Episodes = ({ podcasts }) => {
	return (
		<div className='container'>
			<div className={podcastStyle.podcast}>
				<h1 className='text-center py-4'> Episodes </h1>
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
		},
	};
};

export default Episodes;
