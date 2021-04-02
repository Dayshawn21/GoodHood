import { fromImagetoUrl } from '../utils/urls';
import Link from 'next/link';
import { Image } from 'react-bootstrap';

const EspCard = ({ podcast }) => {
	return (
		<div className='text-center py-3'>
			<Link href={`/podcasts/${podcast.slug}`}>
				<a>
					<Image
						src={fromImagetoUrl(podcast.image)}
						// className='card-img-top'
						fluid
					/>
					<div className='card-body'>
						<h3 className='card-title'>{podcast.title}</h3>
						<p>{podcast.upload}</p>
						<a href='#' className='btn btn-primary btn-lg'>
							Listen
						</a>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default EspCard;
