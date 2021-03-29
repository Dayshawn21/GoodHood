import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

import { fromImagetoUrl } from '../utils/urls';
import ProductContext from '../context/Product/ProductContext';
import MerchCard from './MerchCard';

const Merch = ({ products }) => {
	return (
		<div className='container'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1 className='text-center py-4'>Merch </h1>

			<div className={styles.grid3}>
				{products && products.map((product) => <MerchCard product={product} />)}
			</div>
			<div className='py-3 text-center'>
				<Link href='/Merch'>
					<a className='btn btn-primary btn-lg '>More Merch </a>
				</Link>
			</div>
		</div>
	);
};

export default Merch;
