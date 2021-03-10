import Nav from './Navbar';
import Footer from './Footer.js';
const Layout = ({ children }) => {
	return (
		<>
			<Nav />

			<main> {children}</main>

			<Footer></Footer>
		</>
	);
};

export default Layout;
