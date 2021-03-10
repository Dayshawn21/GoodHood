import style from '../styles/BuyButton.module.scss';
import axios from 'axios';
import { useContext } from 'react';
import { Router, useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PK, API_URL } from '../utils/urls';
import AuthContext from '../context/Auth/AuthContext';

const stripePromise = loadStripe(STRIPE_PK);
const BuyButton = ({ product }) => {
	const { user, getToken } = useContext(AuthContext);

	const router = useRouter();
	const redirectToLogin = () => {
		router.push('/login');
	};

	const handleBuy = async () => {
		const stripe = await stripePromise;
		const token = await getToken;

		const res = await axios({
			method: 'post',
			url: `${API_URL}/orders`,
			headers: {
				'Content-type': 'application/json',
				authorization: `Bearer ${token}`,
			},
		}).then();

		const session = await res;

		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});
	};
	return (
		<>
			{!user && (
				<button className={style.buy} onClick={redirectToLogin}>
					Login to Buy
				</button>
			)}

			{user && (
				<button className={style.buy} onClick={handleBuy}>
					Buy Items
				</button>
			)}
		</>
	);
};

export default BuyButton;
