import Head from 'next/head';
import ProductContext from '../context/Product/ProductContext';
import { useContext, useState } from 'react';

import Espisodes from '../componets/Episodes';
import Merch from '../componets/Merch';

import { fromImagetoUrl, API_URL } from '../utils/urls';
import Header from '../componets/Header';
import { Router, useRouter } from 'next/router';
import { parseCookies } from 'nookies';

const Home = ({ podcasts, products }) => {
	const Router = useRouter();

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
};

export const getStaticProps = async () => {
	// Fetch Products

	const jwt = parseCookies().jwt;
	const product_res = await fetch(`${API_URL}/products?_limit=3`);
	const products = await product_res.json();

	const podcast_res = await fetch(`${API_URL}/podcasts?_limit=3`);
	const podcasts = await podcast_res.json();

	const orders_res = await fetch(`${API_URL}/orders`);
	const orders = await orders_res.json();

	if (!jwt) {
		if (Router.pathname === '/cart') {
			redirectUsers('/login');
		}
	}
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
