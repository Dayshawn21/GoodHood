import Head from 'next/head';
import { useContext, useState, useEffect } from 'react';
import { API_URL } from '../utils/urls';
import Link from 'next/link';
import AuthContext from '../context/Auth/AuthContext';

const useOrders = (user, getToken) => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchOrders = async () => {
			if (user) {
				try {
					setLoading(true);
					const token = await getToken();
					const order_res = await fetch(`${API_URL}/orders`, {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});

					const data = await order_res.json();
					setOrders(data);
				} catch (err) {
					setOrders([]);
				}
				setLoading(false);
			}
		};
		fetchOrders();
	}, [user]);
	return { orders, loading };
};

const Account = ({ orders }) => {
	// const { user, logoutUser, getToken } = useContext(AuthContext);

	// const { orders, loading } = useOrders(user, getToken);

	if (!user) {
		return (
			<div>
				<p>Please Login or Register</p>
				<Link href='/'>
					<a>
						<button> Go Back</button>
					</a>
				</Link>
			</div>
		);
	}
	return (
		<div>
			<Head>
				<title> Account Page </title>
			</Head>
			<h2> Account Page</h2>
			<h3>Your Order</h3>
			{loading && <p> Loading your orders...</p>}
			{orders.map((order) => (
				<div>
					{order.product.name} $ {order.total} {order.status}
				</div>
			))}
			<hr />
			<a href='#' onClick={logoutUser}>
				Logout
			</a>
		</div>
	);
};
export async function getStaticProps() {
	// Fetch Products

	const order_res = await fetch(`${API_URL}/orders`);
	const orders = await orders_res.json();

	// return Products

	return {
		props: {
			orders,
		},
	};
}

export default Account;
