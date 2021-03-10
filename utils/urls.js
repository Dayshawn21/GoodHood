export const API_URL =
	process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const MAGIC_PUBLIC_KEY =
	process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_84048512A1F68756';

export const STRIPE_PK =
	process.env.NEXT_PUBLIC_STRIPE_PK ||
	'pk_test_51IJWdUGE6egoMBXNfwMWFU2Yd2FbQp9edtqixhW6f1nYqAOTZ5v6MVgB9PYycIxDZbicni6k7os0MpdcvuxT1w1N00qg6tI9c1';

/**
 * Give an image return URL
 * Works for local and deployed
 * @param {any} image
 */

export const fromImagetoUrl = (image) => {
	if (!image) {
		return '/vercel.svg';
	}

	if (image.url.indexOf('/') === 0) {
		return `${API_URL}${image.url}`;
	}

	return image.url;
};
