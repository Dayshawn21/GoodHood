import { fromImagetoUrl, API_URL } from '../../utils/urls';
import BuyButton from '../../componets/BuyButton';

const Product = ({ product }) => {
	return (
		<div className='container'>
			<img src={fromImagetoUrl(product.image)} alt='' />
			<h3>{product.name}</h3>
			<p>
				${product.price} <BuyButton product={product} />
			</p>
			<p>{product.description}</p>
		</div>
	);
};

export async function getStaticProps({ params: { slug } }) {
	const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
	const found = await product_res.json();

	return {
		props: {
			product: found[0],
		},
	};
}

export async function getStaticPaths() {
	//Retrieve all the possible paths

	const products_res = await fetch(`${API_URL}/products/`);
	const products = await products_res.json();

	//Return them to NextJS context

	return {
		paths: products.map((product) => ({
			params: { slug: String(product.slug) },
		})),

		fallback: false,
	};
}

export default Product;
