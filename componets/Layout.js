import Nav from './Navbar';
import Footer from './Footer.js';
import layout from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<div>
			<Nav />

			<main> {children}</main>

			<Footer></Footer>
		</div>
	);
};

export default Layout;
