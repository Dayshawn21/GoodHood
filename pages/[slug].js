import React, { useState, useEffect } from 'react';
import { fromImagetoUrl, API_URL } from '../utils/urls';
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Form,
} from 'react-bootstrap';
import BuyButton from '../componets/BuyButton';

const Product = ({ product }) => {
	const [qty, setQty] = useState(1);
	const [color, setColor] = useState([]);

	return (
		<div className='py-3'>
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

							{product.countInStock > 0 && (
								<ListGroup.Item variant='secondary'>
									<Row>
										<Col> QTY</Col>
										<Col>
											<Form.Control
												as='select'
												value={qty}
												onChange={(e) => setQty(e.target.value)}
											>
												{[...Array(product.countInStock).keys()].map((x) => (
													<option key={x + 1} value={x + 1}>
														{' '}
														{x + 1}
													</option>
												))}
											</Form.Control>
										</Col>
									</Row>
								</ListGroup.Item>
							)}

							<ListGroup.Item variant='secondary'>
								<Row>
									<Col> Color</Col>
									<Col>
										<Form.Control
											as='select'
											value={color}
											onChange={(e) => setColor(e.target.value)}
										>
											<option value={product.color}>{product.color}</option>
										</Form.Control>
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item variant='secondary'>
								<Row>
									<Col>Status:</Col>
									<Col>
										{product.countInStock > 0 ? ' In Stock' : 'Out of Stock'}
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item variant='secondary'>
								<Button
									variant='main'
									className='btn-block button-color'
									type='button'
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
