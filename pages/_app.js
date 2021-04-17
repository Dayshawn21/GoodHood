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

const stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PK);
const toastOptions = {
	position: 'bottom-center',
	draggable: false,
	hideProgressBar: true,
	className: 'w-full md:max-w-xl',
	toastClassName: 'bg-ecru-white rounded-lg text-black px-3 shadow-md',
};
function MyApp({ Component, pageProps, router }) {
	return (
		<Elements
			stripe={stripePromise}
			options={{
				fonts: [
					{
						cssSrc:
							'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap',
					},
				],
			}}
		>
			<ThemeProvider>
				<ModalProvider>
					<CartProvider>
						<CheckoutProvider>
							<Modal />
							<Layout>
								<AnimatePresence initial={false} exitBeforeEnter>
									<Component {...pageProps} key={router.route} />
								</AnimatePresence>
								<ToastContainer {...toastOptions} />
							</Layout>
						</CheckoutProvider>
					</CartProvider>
				</ModalProvider>
			</ThemeProvider>
		</Elements>
	);
}

export default MyApp;
