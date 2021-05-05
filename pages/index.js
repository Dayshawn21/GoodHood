import Head from 'next/head';
import { commerce } from '../lib/commerce';
import Mic from '../componets/Mic';
import Espisodes from '../componets/Episodes';
import Merch from '../componets/Merch';

import { NEXT_PUBLIC_SNIPCART_PK, API_URL } from '../utils/urls';
import Header from '../componets/Header';
import { Router, useRouter } from 'next/router';
import ProductList from '../componets/ProductList';
import CategoryList from '../componets/CategoryList';
import { parseCookies } from 'nookies';
import Link from 'next/link';

const Home = ({ podcasts, products }) => {
	const Router = useRouter();

	return (
		<div>
			<Head>
				<link rel='preconnect' href='https://app.snipcart.com' />
				<link rel='preconnect' href='https://cdn.snipcart.com' />
				<script
					async
					src='https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js'
				/>
				<div
					hidden
					id='snipcart'
					data-api-key='NTgxNzg0MzMtY2QxOC00ZDY3LWI0Y2MtNzhhNGQ1OWUwZThjNjM3NTQ3NDEyMjA2NTA1MDcw'
				/>
				<link
					rel='stylesheet'
					href='https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css'
				/>
			</Head>

			<Header></Header>
			<Espisodes podcasts={podcasts}></Espisodes>
			<Merch products={products} />
			<Mic />
		</div>
	);
};

export const getStaticProps = async () => {
	// Fetch Products

	// const merchant = await commerce.merchants.about();
	// const { data: categories } = await commerce.categories.list();
	// const { data: products } = await commerce.products.list();
	const products_res = await fetch(`${API_URL}/products/`);
	const products = await products_res.json();

	const podcast_res = await fetch(`${API_URL}/podcasts?_limit=3`);
	const podcasts = await podcast_res.json();

	const orders_res = await fetch(`${API_URL}/orders`);
	const orders = await orders_res.json();

	// return Products

	return {
		props: {
			products,
			podcasts,
			orders,
		},
	};
};

export default Home;
