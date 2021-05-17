import React, { useState, useEffect } from 'react';
import { fromImagetoUrl, API_URL } from '../../utils/urls';
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Form,
} from 'react-bootstrap';

const Product = ({ product }) => {
	const [productQuantity, setProductQuantity] = useState(0);
	const [selectedImage, setSelectedImage] = useState(0);
	const [selectedVariant, setSelectedVariant] = useState('');

	return (
		<div key={product.id} className='py-3'>
			<Row>
				<Col md={6}>
					<Image src={fromImagetoUrl(product.image)} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item variant='secondary'>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item variant='secondary'>
							Price: ${product.price}
						</ListGroup.Item>
						<ListGroup.Item variant='secondary'>
							Description: {product.description}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item variant='secondary'>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>{product.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item variant='secondary'>
								<Row>
									<Col>Status:</Col>
									<Col>
										{product.instock > 0 ? ' In Stock' : 'Out of Stock'}
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item variant='secondary'>
								<Button
									className='snipcart-add-item'
									data-item-id={product.id}
									data-item-image={fromImagetoUrl(product.image)}
									data-item-name={product.name}
									data-item-url='/'
									data-item-price={product.price}
									data-item-custom1-name='Size'
									data-item-custom1-options={product.size}
								>
									Add to Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export async function getStaticProps({ params: { slug } }) {
	const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
	const found = await product_res.json();

	return {
		props: {
			product: found[0],
		},
	};
}

export async function getStaticPaths() {
	//Retrieve all the possible paths

	const products_res = await fetch(`${API_URL}/products/`);
	const products = await products_res.json();

	//Return them to NextJS context

	return {
		paths: products.map((product) => ({
			params: { slug: String(product.slug) },
		})),

		fallback: false,
	};
}

export default Product;
