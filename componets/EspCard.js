import { fromImagetoUrl } from '../utils/urls';
import Link from 'next/link';

const EspCard = ({ podcast }) => {
	return (
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
	);
};

export default EspCard;
