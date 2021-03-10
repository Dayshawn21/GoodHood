import homeStyles from '../styles/Hero.module.scss';

const Header = () => {
	return (
		<div className={homeStyles.hero}>
			<div className={homeStyles.container}>
				<div className={homeStyles.heroText}>
					<h1>Good in the Hood</h1>
					<p className='lead'>Our community is our culture.</p>
					<p className='lead'>
						Our culture is multi-dimensional and every perspective deserves the
						spotlight.
					</p>
					<p className='lead'>
						We are here to discuss entertainment news, promote entrepreneurship,
						share our unfiltered thoughts & ideas.
					</p>
					<p className='lead'>
						We are here to learn & grow. We are here to teach & uplift. We are
						here to laugh, debate, build, & create.
					</p>
				</div>

				<div className={homeStyles.socail}>
					<h2>LISTEN & SUBSCRIBE ON:</h2>
					<a type='button' className='btn btn-outline-secondary'>
						<i className='fas fa-podcast'></i> Apple
					</a>
					<a type='button' className='btn btn-outline-secondary'>
						<i className='fab fa-spotify'></i> Spotify
					</a>
					<a type='button' className='btn btn-outline-secondary'>
						<i className='fab fa-youtube'></i> Youtube
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
