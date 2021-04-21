import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const Mic = () => {
	return (
		<div className='container py-3'>
			<div className={styles.mic}>
				<h2 className='text-center'>Behind the Mic</h2>

				<div className={styles.grid4}>
					<div className='max-w-sm rounded overflow-hidden shadow-lg px-4 py-2 m-2'>
						<Image
							src='/img/justyn.jpg'
							alt='Picture of the author'
							width={400}
							height={350}
							layout='intrinsic'
						/>
						<div className='px-6 py-4'>
							<div className='font-bold text-4xl mb-2'>Juice: Host</div>
						</div>
						<div className='px-6 pt-4 pb-2'>
							<Link href='https://www.facebook.com/justynpolk'>
								<a>
									<span className='inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold .text-white mr-4 mb-2'>
										<i class='fab fa-facebook-square'></i>
									</span>
								</a>
							</Link>
							<Link href='https://www.facebook.com/justynpolk'>
								<a>
									<span className='inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold .text-white mr-4 mb-2'>
										<i class='fab fa-instagram'></i>
									</span>
								</a>
							</Link>
							<Link href='https://www.facebook.com/justynpolk'>
								<a>
									<span className='inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold .text-white mr-4 mb-2'>
										<i class='fab fa-twitter'></i>
									</span>
								</a>
							</Link>
						</div>
					</div>
					<div className='max-w-sm rounded overflow-hidden shadow-lg px-4 py-2 m-2'>
						<Image
							src='/img/justyn.jpg'
							alt='Picture of the author'
							width={400}
							height={350}
							layout='intrinsic'
						/>
						<div className='px-6 py-4'>
							<div className='font-bold text-4xl mb-2'>Juice: Host</div>
						</div>
						<div className='px-6 pt-4 pb-2'>
							<Link href='https://www.facebook.com/justynpolk'>
								<a>
									<span className='inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold .text-white mr-4 mb-2'>
										<i class='fab fa-facebook-square'></i>
									</span>
								</a>
							</Link>
							<Link href='https://www.facebook.com/justynpolk'>
								<a>
									<span className='inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold .text-white mr-4 mb-2'>
										<i class='fab fa-instagram'></i>
									</span>
								</a>
							</Link>
							<Link href='https://www.facebook.com/justynpolk'>
								<a>
									<span className='inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold .text-white mr-4 mb-2'>
										<i class='fab fa-twitter'></i>
									</span>
								</a>
							</Link>
						</div>
					</div>
					<div className='max-w-sm rounded overflow-hidden shadow-lg px-4 py-2 m-2'>
						<Image
							src='/img/justyn.jpg'
							alt='Picture of the author'
							width={400}
							height={350}
							layout='intrinsic'
						/>
						<div className='px-6 py-4'>
							<div className='font-bold text-4xl mb-2'>Juice: Host</div>
						</div>
						<div className='px-6 pt-4 pb-2'>
							<Link href='https://www.facebook.com/justynpolk'>
								<a>
									<span className='inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold .text-white mr-4 mb-2'>
										<i class='fab fa-facebook-square'></i>
									</span>
								</a>
							</Link>
							<Link href='https://www.facebook.com/justynpolk'>
								<a>
									<span className='inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold .text-white mr-4 mb-2'>
										<i className='fab fa-instagram'></i>
									</span>
								</a>
							</Link>
							<Link href='https://www.facebook.com/justynpolk'>
								<a>
									<span className='inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold .text-white mr-4 mb-2'>
										<i className='fab fa-twitter'></i>
									</span>
								</a>
							</Link>
						</div>
					</div>
					<div className='max-w-sm rounded overflow-hidden shadow-lg px-4 py-2 m-2'>
						<Image
							src='/img/justyn.jpg'
							alt='Picture of the author'
							width={400}
							height={350}
							layout='intrinsic'
						/>
						<div className='px-6 py-4'>
							<div className='font-bold text-4xl mb-2'>Juice: Host</div>
						</div>
						<div className='px-6 pt-4 pb-2'>
							<Link href='https://www.facebook.com/justynpolk'>
								<a>
									<span className='inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold .text-white mr-4 mb-2'>
										<i class='fab fa-facebook-square'></i>
									</span>
								</a>
							</Link>
							<Link href='https://www.facebook.com/justynpolk'>
								<a>
									<span className='inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold .text-white mr-4 mb-2'>
										<i class='fab fa-instagram'></i>
									</span>
								</a>
							</Link>
							<Link href='https://www.facebook.com/justynpolk'>
								<a>
									<span className='inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold .text-white mr-4 mb-2'>
										<i class='fab fa-twitter'></i>
									</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mic;
