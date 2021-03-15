import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Espisodes from '../componets/Episodes';
import Merch from '../componets/Merch';

import { fromImagetoUrl, API_URL } from '../utils/urls';
import Header from '../componets/Header';

export default function Home({ products, podcasts }) {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header></Header>
			<Espisodes podcasts={podcasts}></Espisodes>
			<Merch products={products}></Merch>
		</div>
	);
}

export async function getStaticProps() {
	// Fetch Products

	const product_res = await fetch(`${API_URL}/products/`);
	const products = await product_res.json();

	const podcast_res = await fetch(`${API_URL}/podcasts?_limit=3/`);
	const podcasts = await podcast_res.json();

	// return Products

	return {
		props: {
			products,
			podcasts,
		},
	};
}
