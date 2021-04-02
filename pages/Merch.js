import MerchCard from '../componets/MerchCard';
import { API_URL } from '../utils/urls';
import merchStyle from '../styles/Merch.module.scss';

const Merchs = ({ products }) => {
	return (
		<section className='container'>
			<div className={merchStyle.merch}>
				<h1 className='text-center py-4'>Merch </h1>

				<div className={merchStyle.grid}>
					{products &&
						products.map((product) => <MerchCard product={product} />)}
				</div>
			</div>
		</section>
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
