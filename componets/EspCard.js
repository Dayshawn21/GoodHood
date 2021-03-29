import { fromImagetoUrl } from '../utils/urls';
import Link from 'next/link';
import { Image } from 'react-bootstrap';

const EspCard = ({ podcast }) => {
	return (
		<div className='text-center'>
			<Link href={`/podcasts/${podcast.slug}`}>
				<a>
					<Image
						src={fromImagetoUrl(podcast.image)}
						// className='card-img-top'
						fluid
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
