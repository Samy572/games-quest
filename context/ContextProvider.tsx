'use client';
import { useState } from 'react';
import Context from '@/context/Context';

export default function ContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const APIKEY = '22dc8451931443c6bc3fbc279f7a8c7b';
	const url2023 = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2023-01-01,2023-12-31&ordering=-added`;
	const url2022 = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2022-01-01,2022-12-31&ordering=-added`;
	const url2021 = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2021-01-01,2021-12-31&ordering=-added`;
	const [toggleMenu, setToggleMenu] = useState(false);
	const [url, setUrl] = useState(`${url2023}`);

	const toggleMenuHandler = () => {
		setToggleMenu(!toggleMenu);
	};

	const urlHandler = (url: string) => {
		switch (url) {
			case 'url2023':
				setUrl(url2023);
				break;
			case 'url2022':
				setUrl(url2022);
				break;
			case 'url2021':
				setUrl(url2021);
				break;

			default:
				setUrl(url2023);
				break;
		}
	};

	interface MyContextType {
		toggleMenu: boolean;
		toggleMenuHandler: () => void;
		url: string;
		urlHandler: (url: string) => void;
	}

	const contextValue: MyContextType = {
		toggleMenu,
		toggleMenuHandler,
		url,
		urlHandler,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
