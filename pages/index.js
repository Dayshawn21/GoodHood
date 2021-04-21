import Head from 'next/head';
import { commerce } from '../lib/commerce';
import Mic from '../componets/Mic';
import Espisodes from '../componets/Episodes';
import Merch from '../componets/Merch';

import { fromImagetoUrl, API_URL } from '../utils/urls';
import Header from '../componets/Header';
import { Router, useRouter } from 'next/router';
import ProductList from '../componets/ProductList';
import CategoryList from '../componets/CategoryList';
import { parseCookies } from 'nookies';
import Link from 'next/link';

const Home = ({ podcasts, products, merchant, categories }) => {
	const Router = useRouter();

	return (
		<div>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header></Header>
			<Espisodes podcasts={podcasts}></Espisodes>
			<ProductList products={products} />
			<Mic />
		</div>
	);
};

export const getStaticProps = async () => {
	// Fetch Products

	const merchant = await commerce.merchants.about();
	const { data: categories } = await commerce.categories.list();
	const { data: products } = await commerce.products.list();

	const podcast_res = await fetch(`${API_URL}/podcasts?_limit=3`);
	const podcasts = await podcast_res.json();

	const orders_res = await fetch(`${API_URL}/orders`);
	const orders = await orders_res.json();

	// return Products

	return {
		props: {
			merchant,
			categories,
			products,
			podcasts,
			orders,
		},
	};
};

export default Home;
