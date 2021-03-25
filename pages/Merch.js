import Merch from '../componets/Merch';
import { API_URL } from '../utils/urls';

const Merchs = ({ products }) => {
	return (
		<div>
			<Merch products={products} />
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
