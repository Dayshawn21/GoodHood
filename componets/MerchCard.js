import { fromImagetoUrl } from '../utils/urls';
import Link from 'next/link';

const MerchCard = ({ product }) => {
	return (
		<div>
			<Link href={`/products/${product.slug}`}>
				<a>
					<img src={fromImagetoUrl(product.image)} alt='...' />
					<div className='card-body'>
						<p>${product.price}</p>
						<h2 className='card-title'>{product.name}</h2>

						<a href='#' className='btn btn-primary'>
							Go Buy
						</a>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default MerchCard;
