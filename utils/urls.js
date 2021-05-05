export const API_URL =
	process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const NEXT_PUBLIC_CHEC_PUBLIC_API_KEY =
	'pk_2558968579fde7e9fa394a45c397a0e63196c8608c891';

export const NEXT_PUBLIC_SNIPCART_PK =
	'NTgxNzg0MzMtY2QxOC00ZDY3LWI0Y2MtNzhhNGQ1OWUwZThjNjM3NTQ3NDEyMjA2NTA1MDcw';

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
