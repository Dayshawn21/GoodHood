import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Magic } from 'magic-sdk';
import { MAGIC_PUBLIC_KEY } from '../../utils/urls';

const AuthContext = createContext();

export const AuthProvider = (props) => {
	const [user, setUser] = useState(null);
	const router = useRouter();

	return (
		<AuthContext.Provider value={{ user }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
