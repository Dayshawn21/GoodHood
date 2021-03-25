import Layout from '../componets/Layout';
import '../styles/globals.scss';
import { AuthProvider } from '../context/Auth/AuthContext';
import { ProductProvider } from '../context/Product/ProductContext';
import { API_URL } from '../utils/urls';
function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<ProductProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ProductProvider>
		</AuthProvider>
	);
}

export default MyApp;
