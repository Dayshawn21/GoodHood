import homeStyles from '../styles/Hero.module.scss';
import Image from 'next/image';
const Header = () => {
	return (
		<div className={homeStyles.hero}>
			<div className='container'>
				<div className={homeStyles.heroText}>
					<Image
						src='/PURPLE_360x.jpg'
						alt='Picture of the author'
						width={450}
						height={450}
						layout='intrinsic'
					/>
					<div className={homeStyles.socail}>
						<h2>LISTEN & SUBSCRIBE ON:</h2>
						<a
							href='https://podcasts.apple.com/us/podcast/good-in-the-hood-podcast/id1454831531'
							type='button'
							className='btn btn-outline-secondary'
						>
							<i className='fas fa-podcast'></i> Apple
						</a>
						<a
							href='https://open.spotify.com/show/3rClGGBu1MvCFDrNb9Klql?si=2_EN6TPFQZC7MHLJugQkuQ&nd=1'
							type='button'
							className='btn btn-outline-secondary'
						>
							<i className='fab fa-spotify'></i> Spotify
						</a>
						<a
							href='https://www.youtube.com/channel/UCrPlrMJowXVgWUW9yWfP7pg'
							type='button'
							className='btn btn-outline-secondary'
						>
							<i className='fab fa-youtube'></i> Youtube
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
