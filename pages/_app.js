import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';
import Layout from '../componets/Layout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from '../context/cart';
import { CheckoutProvider } from '../context/checkout';
import { ModalProvider } from '../context/model';
import { ThemeProvider } from '../context/theme';
import '../styles/globals.scss';
import Modal from '../componets/Model';

import { NEXT_PUBLIC_STRIPE_PK } from '../utils/urls';

const toastOptions = {
	position: 'bottom-center',
	draggable: false,
	hideProgressBar: true,
	className: 'w-full md:max-w-xl',
	toastClassName: 'bg-ecru-white rounded-lg text-black px-3 shadow-md',
};
function MyApp({ Component, pageProps, router }) {
	return (
		<Layout>
			<Component {...pageProps} key={router.route} />
		</Layout>
	);
}

export default MyApp;
