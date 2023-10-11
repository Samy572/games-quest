'use client';
import { GamesOfTheYear } from '@/components/GameOfTheYear/gameoftheyear';
import Header from '@/components/Header/Menu/header';
import Context from '@/context/Context';
import { useState } from 'react';

export default function Home() {
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

	return (
		<Context.Provider value={contextValue}>
			<div>
				<Header />
				<GamesOfTheYear />
			</div>
		</Context.Provider>
	);
}
