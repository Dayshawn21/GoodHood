import { useContext } from 'react';
import Link from 'next/link';

import ProductContext from '../context/Product/ProductContext';
import styles from '../styles/Home.module.scss';
import { fromImagetoUrl } from '../utils/urls';
import EspCard from './EspCard';

const Episodes = ({ podcasts }) => {
	return (
		<section className='container'>
			<div className={styles.esp}>
				<h2>Latest Episodes</h2>

				<div className={styles.grid3}>
					{podcasts && podcasts.map((podcast) => <EspCard podcast={podcast} />)}
				</div>
				<div className='py-3 text-center'>
					<Link href='/Episodes'>
						<a className='btn btn-primary btn-lg '>More Episodes </a>
					</Link>
				</div>
			</div>
		</section>
	);
};
export default Episodes;
