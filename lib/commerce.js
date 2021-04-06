import CommerceSDK from '@chec/commerce.js';
import { NEXT_PUBLIC_CHEC_PUBLIC_API_KEY } from '../utils/urls';

const client = new CommerceSDK(NEXT_PUBLIC_CHEC_PUBLIC_API_KEY);

export default client;
