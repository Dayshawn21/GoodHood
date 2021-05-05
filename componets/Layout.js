import Head from 'next/head';
import Nav from './Navbar';
import Footer from './Footer.js';
import layout from '../styles/Layout.module.scss';
import { NEXT_PUBLIC_SNIPCART_PK } from '../utils/urls';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<link rel='preconnect' href='https://app.snipcart.com' />
				<link rel='preconnect' href='https://cdn.snipcart.com' />
				<link
					rel='stylesheet'
					href='https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css'
				/>
			</Head>
			<Nav />

			<main> {children}</main>

			<Footer></Footer>
			<script
				async
				src='https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js'
			/>
			<div hidden id='snipcart' data-api-key={NEXT_PUBLIC_SNIPCART_PK} />
		</div>
	);
};

export default Layout;
