import Layout from '../componets/Layout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from '../context/cart';
import { CheckoutProvider } from '../context/checkout';
import { ModalProvider } from '../context/model';
import '../styles/globals.scss';

import { STRIPE_PK } from '../utils/urls';

const stripePromise = loadStripe(STRIPE_PK);
function MyApp({ Component, pageProps }) {
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
			<ModalProvider>
				<CartProvider>
					<CheckoutProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</CheckoutProvider>
				</CartProvider>
			</ModalProvider>
		</Elements>
	);
}

export default MyApp;
