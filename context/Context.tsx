import { createContext } from 'react';

export default createContext({
	toggleMenu: false,
	setToggleMenu: () => {},
	toggleMenuHandler: () => {},
});