import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

import { fromImagetoUrl } from '../utils/urls';
import ProductContext from '../context/Product/ProductContext';

const Merch = ({ products }) => {
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
						<div>
							<Link href={`/products/${product.slug}`}>
								<a>
									<img src={fromImagetoUrl(product.image)} alt='...' />
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
};

export default Merch;
