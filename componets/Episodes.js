import { useContext } from 'react';
import Link from 'next/link';

import ProductContext from '../context/Product/ProductContext';
import styles from '../styles/Home.module.scss';
import { fromImagetoUrl } from '../utils/urls';
import EspCard from './EspCard';

const Episodes = ({ podcasts }) => {
	return (
		<section className='container'>
			<div className='py-4'>
				<h1 className='text-center'>
					<u> Latest Episodes </u>
				</h1>
			</div>
			<div className={styles.grid3}>
				{podcasts && podcasts.map((podcast) => <EspCard podcast={podcast} />)}
			</div>
			<Link href='/Episodes'>
				<a>More Episodes </a>
			</Link>
		</section>
	);
};
export default Episodes;
