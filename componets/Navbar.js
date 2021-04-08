import Link from 'next/link';
import { useContext } from 'react';
import navStyles from '../styles/Nav.module.scss';
import AuthContext from '../context/Auth/AuthContext';
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

	const { user } = useContext(AuthContext);
	return (
		<div>
			<Navbar bg='light'>
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
					<Nav className='justify-content-end' as='ul'>
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
							<Nav.Link href='/Cart'>
								<i class='fas fa-shopping-cart'></i>
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navbars;
