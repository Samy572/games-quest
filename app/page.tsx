'use client';
import { GamesOfTheYear } from '@/components/GameOfTheYear/gameoftheyear';
import Header from '@/components/Header/Menu/header';
import { MenuToggle } from '@/components/Header/Menu/menu';
import Context from '@/context/Context';
import { useState } from 'react';

export default function Home() {
	const [toggleMenu, setToggleMenu] = useState(false);

	const toggleMenuHandler = () => {
		setToggleMenu(!toggleMenu);
	};

	const contextValue = {
		toggleMenu,
		toggleMenuHandler,
	};

	return (
		<Context.Provider value={contextValue}>
			<div>
				<Header />
				<MenuToggle />
				<GamesOfTheYear />
			</div>
		</Context.Provider>
	);
}
