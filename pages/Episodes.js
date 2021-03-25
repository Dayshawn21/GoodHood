import Espisodes from '../componets/Episodes';
import { API_URL } from '../utils/urls';
import EspCard from '../componets/EspCard';

const Episodes = ({ podcasts }) => {
	return (
		<div>
			<h1 className='text-center py-4'> Episodes </h1>
			{podcasts && podcasts.map((podcast) => <EspCard podcast={podcast} />)}
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
