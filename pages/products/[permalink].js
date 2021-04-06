import commerce from '../../lib/commerce';
import React, { useState, useEffect } from 'react';
import VariantPicker from '../../componets/VariantSelector';

import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Form,
} from 'react-bootstrap';

const ProductPage = ({ product }) => {
	const {
		variant_groups: variantGroups,
		assets,
		meta,
		related_products: relatedProducts,
	} = product;
	const initialVariants = React.useMemo(
		() =>
			variantGroups.reduce((all, { id, options }) => {
				const [firstOption] = options;

				return { ...all, [id]: firstOption.id };
			}, {}),
		[product.permalink],
	);
	const [selectedVariants, setSelectedVariants] = useState(initialVariants);
	useEffect(() => {
		setSelectedVariants(initialVariants);
	}, [product.permalink]);

	const handleVariantChange = ({ target: { id, value } }) =>
		setSelectedVariants({
			...selectedVariants,
			[id]: value,
		});

	const [qty, setQty] = useState(1);

	return (
		<div className='p-4'>
			<Row>
				<Col md={6}>
					<Image src={product.media.source} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item variant='secondary'>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item variant='secondary'>
							Price: {product.price.formatted_with_symbol}
						</ListGroup.Item>
						<ListGroup.Item variant='secondary'>
							<div
								className='product-detail__description'
								dangerouslySetInnerHTML={{ __html: product.description }}
							></div>
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
										<strong>{product.price.formatted_with_symbol}</strong>
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item variant='secondary'>
								<Row>
									<Col> Color</Col>
									<Col>
										<VariantPicker
											variantGroups={variantGroups}
											defaultValues={initialVariants}
											onChange={handleVariantChange}
										/>
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

export async function getStaticProps({ params }) {
	const { permalink } = params;

	const product = await commerce.products.retrieve(permalink, {
		type: 'permalink',
	});

	return {
		props: {
			product,
		},
	};
}

export async function getStaticPaths() {
	const { data: products } = await commerce.products.list();

	return {
		paths: products.map((product) => ({
			params: {
				permalink: product.permalink,
			},
		})),
		fallback: false,
	};
}

export default ProductPage;
