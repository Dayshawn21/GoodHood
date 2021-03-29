import MerchCard from '../componets/MerchCard';
import { API_URL } from '../utils/urls';

const Merchs = ({ products }) => {
	return (
		<div>
			<h1 className='text-center py-4'>Merch </h1>

			<div>
				{products && products.map((product) => <MerchCard product={product} />)}
			</div>
		</div>
	);
};
export const getStaticProps = async () => {
	// Fetch Products

	const product_res = await fetch(`${API_URL}/products`);
	const products = await product_res.json();

	// return Products

	return {
		props: {
			products,
		},
	};
};

export default Merchs;
