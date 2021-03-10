import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Espisodes from '../componets/Episodes';

import { fromImagetoUrl, API_URL } from '../utils/urls';

export default function Merch({ products }) {
	return (
		<div className='container'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1 className='text-center py-3'>Merch </h1>

			<div className={styles.grid3}>
				{products &&
					products.map((product) => (
						<div className='card' style={{ width: '20rem' }}>
							<Link href={`/products/${product.slug}`}>
								<a>
									<img
										src={fromImagetoUrl(product.image)}
										className='card-img-top'
										alt='...'
									/>
									<div className='card-body'>
										<p>${product.price}</p>
										<h2 className='card-title'>{product.name}</h2>

										<a href='#' className='btn btn-primary'>
											Go Buy
										</a>
									</div>
								</a>
							</Link>
						</div>
					))}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	// Fetch Products

	const product_res = await fetch(`${API_URL}/products/`);
	const products = await product_res.json();

	// return Products

	return {
		props: {
			products,
		},
	};
}
