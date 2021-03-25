import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ProductContext = createContext();

export const ProductProvider = (props) => {
	const [products, setProduct] = useState(null);
	const [podcasts, setPodcast] = useState(null);
	const router = useRouter();

	const getProducts = async () => {
		const product_res = await fetch(`${API_URL}/products/`);
		const products = await product_res.json();
		setProduct(products);
	};

	return (
		<ProductContext.Provider value={{ products, podcasts, getProducts }}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContext;
