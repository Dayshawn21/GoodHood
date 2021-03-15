import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import stylesPodcast from '../styles/Podcast.module.scss';
import { fromImagetoUrl, API_URL } from '../utils/urls';

export default function Episodes({ podcasts }) {
	return (
		<div className='container'>
			<div className='py-4'>
				<h1 className='text-center'>
					<u> Latest Episodes </u>
				</h1>
			</div>
			<div className={styles.grid3}>
				{podcasts &&
					podcasts.map((podcast) => (
						<div className='text-center'>
							<Link href={`/podcasts/${podcast.slug}`}>
								<a>
									<img
										src={fromImagetoUrl(podcast.image)}
										// className='card-img-top'
										alt='...'
									/>
									<div className='card-body'>
										<h2 className='card-title'>{podcast.title}</h2>
										<p>{podcast.upload}</p>
										<a href='#' className='btn btn-primary'>
											Go Listen
										</a>
									</div>
								</a>
							</Link>
						</div>
					))}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	// Fetch Products

	const podcast_res = await fetch(`${API_URL}/podcasts?_limit=3`);
	const podcasts = await podcast_res.json();

	// return Products

	return {
		props: {
			podcasts,
		},
	};
}
