import Layout from '../componets/Layout';

import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
	return (
		<Layout>
			<Component {...pageProps} key={router.route} />
		</Layout>
	);
}

export default MyApp;
