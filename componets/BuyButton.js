import style from '../styles/BuyButton.module.scss';
import axios from 'axios';
import { useContext } from 'react';
import { Router, useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import { NEXT_PUBLIC_SNIPCART_PK, API_URL } from '../utils/urls';

const BuyButton = ({ product }) => {
	const router = useRouter();
	const redirectToLogin = () => {
		router.push('/login');
	};

	return (
		<>
			<button
				className='snipcart-add-item'
				data-item-id={product.id}
				data-item-image={product.image}
				data-item-name={product.title}
				data-item-url='/'
				data-item-price={product.price}
			>
				Add to Cart
			</button>
		</>
	);
};

export default BuyButton;
