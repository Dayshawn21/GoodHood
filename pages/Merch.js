import MerchCard from '../componets/MerchCard';
import { API_URL } from '../utils/urls';
import { commerce } from '../lib/commerce';
import merchStyle from '../styles/Merch.module.scss';
import ProductList from '../componets/ProductList';

const Merchs = ({ products, merchant, categories }) => {
	return (
		<section className='container'>
			<div className={merchStyle.merch}>
				<h1 className='text-center py-4'>Merch </h1>

				<ProductList products={products} />
			</div>
		</section>
	);
};
export const getStaticProps = async () => {
	// Fetch Products

	const merchant = await commerce.merchants.about();
	const { data: categories } = await commerce.categories.list();
	const { data: products } = await commerce.products.list();

	// return Products

	return {
		props: {
			merchant,
			categories,
			products,
		},
	};
};

export default Merchs;
