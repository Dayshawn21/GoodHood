import Head from 'next/head';
import { client } from '../utils/shopify';
import Mic from '../componets/Mic';
import Espisodes from '../componets/Episodes';
import Merch from '../componets/Merch';

import { API_URL } from '../utils/urls';
import Header from '../componets/Header';
import { Router, useRouter } from 'next/router';

const Home = ({ podcasts, products }) => {
	const Router = useRouter();

	return (
		<div>
			<Header></Header>
			<Espisodes podcasts={podcasts}></Espisodes>
			<Merch products={products} />
			<h1>hello</h1>
			<Mic />
		</div>
	);
};

export const getStaticProps = async () => {
	// Fetch Products
	const product_res = await fetch(`${API_URL}/products?_limit=3`);
	const products = await product_res.json();

	const podcast_res = await fetch(`${API_URL}/podcasts?_limit=3`);
	const podcasts = await podcast_res.json();

	// return Products

	return {
		props: {
			products,
			podcasts,
		},
	};
};

export default Home;
