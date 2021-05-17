import { fromImagetoUrl } from '../utils/urls';
import Link from 'next/link';
import { Image } from 'react-bootstrap';

const MerchCard = ({ product }) => {
	return (
		<div className='py-3'>
			<Link href={`/products/${product.slug}`}>
				<a>
					<Image
						src={fromImagetoUrl(product.image)}
						// className='card-img-top'
						fluid
					/>
					<div className='card-body text-center'>
						<h3 className='card-title'>{product.title}</h3>
						<p>${product.price}</p>

						<a href='#' className='btn btn-primary btn-lg'>
							Buy
						</a>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default MerchCard;
