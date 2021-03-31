import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import MerchCard from './MerchCard';

const Merch = ({ products }) => {
	return (
		<section className='container'>
			<div className={styles.merch}>
				<h2>Merch </h2>

				<div className={styles.grid3}>
					{products &&
						products.map((product) => <MerchCard product={product} />)}
				</div>
				<div className='py-3 text-center'>
					<Link href='/Merch'>
						<a className='btn btn-primary btn-lg '>More Merch </a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Merch;
