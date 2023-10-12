'use client';
import { useState } from 'react';
import Context from '@/context/Context';

export default function ContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [toggleMenu, setToggleMenu] = useState(false);

	const toggleMenuHandler = () => {
		setToggleMenu(!toggleMenu);
	};

	interface MyContextType {
		toggleMenu: boolean;
		toggleMenuHandler: () => void;
	}

	const contextValue: MyContextType = {
		toggleMenu,
		toggleMenuHandler,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
