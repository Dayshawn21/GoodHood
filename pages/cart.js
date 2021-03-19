import { parseCookies } from 'nookies';
import { API_URL } from '../utils/urls';

const Cart = ({ orders }) => {
	return (
		<div>
			<h1>Cart</h1>

			{orders &&
				orders.map((order) => (
					<div>
						{order.product.name} $ {order.total} {order.status}
					</div>
				))}
		</div>
	);
};
export async function getStaticProps() {
	const jwt = parseCookies().jwt;

	const order_res = await fetch(`${API_URL}/orders/`, {
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
	});
	const orders = await order_res.json();
	return {
		props: {
			orders,
		},
	};
}

export default Cart;
