import { fromImagetoUrl } from '../utils/urls';
import Link from 'next/link';

const MerchCard = ({ product }) => {
	return (
		<div className='py-3'>
			<Link href={`/products/${product.slug}`}>
				<a>
					<img src={fromImagetoUrl(product.image)} alt='...' />
					<div className='card-body text-center'>
						<h3 className='card-title'>{product.name}</h3>
						<p>${product.price}</p>

						<a href='#' className='btn btn-primary btn-lg'>
							Go Buy
						</a>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default MerchCard;
