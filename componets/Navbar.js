import Link from 'next/link';
import { useContext } from 'react';
import navStyles from '../styles/Nav.module.scss';
import CartSummary from './CartSummary';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Navbar, Nav } from 'react-bootstrap';

const Navbars = () => {
	const router = useRouter();

	const isHome = router.pathname === '/';

	const goBack = (e) => {
		e.preventDefault();
		router.back();
	};

	return (
		<div>
			<Navbar bg='light' expand='lg' className='justify-content-center'>
				<Navbar.Brand href='/'>
					<Image
						src='/PURPLE_360x.jpg'
						alt='Picture of the author'
						width={80}
						height={80}
						layout='intrinsic'
					/>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav as='ul'>
						<Nav.Item as='li'>
							<Nav.Link href='/Merch'>Merch</Nav.Link>
						</Nav.Item>

						<Nav.Item as='li'>
							<Nav.Link href='/Episodes'>Episodes</Nav.Link>
						</Nav.Item>

						<Nav.Item as='li'>
							<Nav.Link href='/Contact'>Contact</Nav.Link>
						</Nav.Item>

						<Nav.Item as='li'>
							<Nav.Link className='snipcart-checkout snipcart-summary'>
								<i class='fas fa-shopping-cart'></i>
								<span className='snipcart-total-price'>$0.00</span>
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navbars;
