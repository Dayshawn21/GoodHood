import Product from './Product';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function ProductList({ products }) {
	if (!products) return null;

	return (
		<section className='container py-3'>
			<div className={styles.merch}>
				<h2>Merch </h2>
				<div className={styles.grid3}>
					{products.map((product) => (
						<li key={product.permalink}>
							<Link href={`/products/${product.permalink}`}>
								<a>
									<Product {...product} />
								</a>
							</Link>
						</li>
					))}
				</div>
			</div>
		</section>
	);
}
