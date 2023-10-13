import { createContext } from 'react';

export default createContext({
	toggleMenu: false,
	toggleMenuHandler: () => {},
	url: '',
	urlHandler: (url: string) => {},
});
