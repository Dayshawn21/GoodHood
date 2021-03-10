import Layout from '../componets/Layout';
import '../styles/globals.scss';
import { AuthProvider } from '../context/Auth/AuthContext';
function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthProvider>
	);
}

export default MyApp;
