'use client';
import { useEffect, useState } from 'react';
import Context from '@/context/Context';
import { MyContextType } from '@/src/types/context';

export default function ContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [data, setData] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [dataSearchInput, setDataSearchInput] = useState([]);
	const APIKEY = process.env.SECRET;

	const url2023 = `https://api.rawg.io/api/games?page_size=18&key=${APIKEY}&dates=2023-01-01,2023-12-31&ordering=-added`;
	const url2022 = `https://api.rawg.io/api/games?page_size=18&key=${APIKEY}&dates=2022-01-01,2022-12-31&ordering=-added`;
	const url2021 = `https://api.rawg.io/api/games?page_size=18&key=${APIKEY}&dates=2021-01-01,2021-12-31&ordering=-added`;
	const searchGames = `https://api.rawg.io/api/games?key=${APIKEY}&search=${inputValue}`;

	const urlByplatform = `https://api.rawg.io/api/games?key=${APIKEY}&platforms=${plaformValue}&page_size=18`;
	const [url, setUrl] = useState(`${url2023}`);
	const toggleMenuHandler = () => {
		setToggleMenu(!toggleMenu);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		console.log(e);
	};
	// Fetch data from API
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Réponse du serveur non valide');
				}
				const data = await response.json();
				console.log(data.results);
				setData(data.results);
			} catch (error) {
				console.error('Erreur lors de la récupération des données :', error);
			}
		}
		fetchData();
	}, [url]);
	// Display the game according to the URL
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
	// Search game with input
	useEffect(() => {
		if (inputValue === '') {
			setDataSearchInput([]);
			return;
		}
		const fetchGames = async () => {
			try {
				const response = await fetch(searchGames);
				const data = await response.json();
				console.log(data);
				setDataSearchInput(data.results);
			} catch (error) {
				console.error('error :', error);
			}
		};

		fetchGames();
	}, [inputValue, searchGames]);

	// Reset input
	const resetInput = () => {
		setInputValue('');
		setDataSearchInput([]);
	};

	const contextValue: MyContextType = {
		toggleMenu,
		toggleMenuHandler,
		url,
		urlHandler,
		data,
		inputValue,
		setInputValue,
		dataSearchInput,
		resetInput,
		handleChange,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

// PC = 4
// PS5 = 187
// XBOX serie s = 186
