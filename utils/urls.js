export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://godh.herokuapp.com";

/**
 * Give an image return URL
 * Works for local and deployed
 * @param {any} image
 */

export const fromImagetoUrl = (image) => {
  if (!image) {
    return "/vercel.svg";
  }

  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
