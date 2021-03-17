import { API_URL } from '../utils/urls';

const Cart = ({ cart, authData }) => {
	console.log(cart, authData);
	return (
		<div>
			<h1>Cart</h1>
		</div>
	);
};
export async function getStaticProps() {
	const loginInfo = {
		identifier: 'test1@test.com',
		password: 'dayday',
	};

	const login = await fetch(`${API_URL}/auth/local`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(loginInfo),
	});

	const loginResponse = await login.json();
	// Fetch Products
	const cart_res = await fetch(`${API_URL}/orders/`, {
		headers: {
			Authorization: `Bearer ${loginResponse.jwt}`,
		},
	});
	const cart = await cart_res.json();

	// return Products

	return {
		props: {
			cart,
			authData: loginResponse,
		},
	};
}

export default Cart;
