import Link from 'next/link';
import { useContext } from 'react';
import navStyles from '../styles/Nav.module.scss';
import AuthContext from '../context/Auth/AuthContext';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
	const router = useRouter();

	const isHome = router.pathname === '/';

	const goBack = (e) => {
		e.preventDefault();
		router.back();
	};

	const { user } = useContext(AuthContext);
	return (
		<>
			<nav className={navStyles.navbar}>
				<ul>
					<li>
						<Link href='/'>
							<a>
								<Image
									src='/PURPLE_360x.jpg'
									alt='Picture of the author'
									width={80}
									height={80}
								/>
							</a>
						</Link>
					</li>
					<li>
						<a href='https://www.facebook.com/goodinthehoodpod'>
							<i className='fab fa-facebook-square'></i>
						</a>
					</li>
					<li>
						<a href='https://twitter.com/goodinallhoods'>
							<i className='fab fa-twitter'></i>
						</a>
					</li>
					<li>
						<a href='https://www.instagram.com/goodinthehoodpod/'>
							<i className='fab fa-instagram'></i>
						</a>
					</li>
				</ul>

				<ul>
					<li>
						<Link href='/Episodes'>Episodes </Link>
					</li>
					<li>
						<Link href='/Merch'>Merch </Link>
					</li>
					<li>
						<Link href='/contact'> Contact </Link>
					</li>
					<li>
						{user ? (
							<Link href='/account'>
								<a>{user.email}</a>
							</Link>
						) : (
							<Link href='login'>
								<a> Login</a>
							</Link>
						)}
					</li>
					<li>
						<Link href='/cart'>
							<i class='fas fa-shopping-cart'></i>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
