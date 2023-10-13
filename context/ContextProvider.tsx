'use client';
import { useEffect, useState } from 'react';
import Context from '@/context/Context';

export default function ContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const APIKEY = process.env.SECRET;
	const url2023 = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2023-01-01,2023-12-31&ordering=-added`;
	const url2022 = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2022-01-01,2022-12-31&ordering=-added`;
	const url2021 = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2021-01-01,2021-12-31&ordering=-added`;
	const [toggleMenu, setToggleMenu] = useState(false);
	const [url, setUrl] = useState(`${url2023}`);
	const [data, setData] = useState([]);

	const toggleMenuHandler = () => {
		setToggleMenu(!toggleMenu);
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Réponse du serveur non valide');
				}
				const data = await response.json();
				setData(data.results);
			} catch (error) {
				console.error('Erreur lors de la récupération des données :', error);
			}
		}
		fetchData();
	}, [url]);

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
		data: any;
	}

	const contextValue: MyContextType = {
		toggleMenu,
		toggleMenuHandler,
		url,
		urlHandler,
		data,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
