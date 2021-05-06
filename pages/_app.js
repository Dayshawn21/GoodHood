import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';
import Layout from '../componets/Layout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from '../context/cart';
import { CheckoutProvider } from '../context/checkout';

import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
	return (
		<Layout>
			<Component {...pageProps} key={router.route} />
		</Layout>
	);
}

export default MyApp;
