import Head from 'next/head';
import { useContext, useState } from 'react';
import { API_URL } from '../utils/urls';
import { setCookie } from 'nookies';
import Router from 'next/router';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		const loginInfo = {
			identifier: email,
			password: password,
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

		setCookie(null, 'jwt', loginResponse.jwt, {
			maxAge: 30 * 24 * 60 * 60,
			path: '/',
		});
		Router.push('/cart');
	}
	return (
		<div>
			<Head>
				<title>Login</title>
				<meta name='description' />
			</Head>

			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email Address'
				/>
				<input
					type='text'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Password'
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default Login;
