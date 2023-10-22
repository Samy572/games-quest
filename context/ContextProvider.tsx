'use client';
import { useEffect, useState } from 'react';
import Context from '@/context/Context';
import { MyContextType } from '@/src/types/context';
import { GameCardType } from '@/src/types/game';

export default function ContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	// Main Data
	const [data, setData] = useState([]);
	// Search Data
	const [inputValue, setInputValue] = useState('');
	const [dataSearchInput, setDataSearchInput] = useState([]);

	// Favorite List
	const [listFavorite, setListFavorite] = useState<GameCardType[]>([]);
	// Count for pagination
	const [count, setCount] = useState(1);
	const [selectedUrl, setSelectedUrl] = useState('2023');

	// url to fetch
	const APIKEY = process.env.SECRET;
	const baseApiUrl = 'https://api.rawg.io/api/games';
	const defaultUrlParams = `?page=${count}&page_size=15&key=${APIKEY}&ordering=-added`;
	const searchGames = `${baseApiUrl}?key=${APIKEY}&search=${inputValue}`;
	const date = `&dates=${selectedUrl}-01-01,${selectedUrl}-12-31`;
	const [url, setUrl] = useState(`${baseApiUrl}${defaultUrlParams}${date}`);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	// Switch year dynamically
	const urlHandler = (year: string) => {
		const selectedYear = year.includes(year) ? year : '2023';
		setUrl(
			`${baseApiUrl}${defaultUrlParams}&dates=${selectedYear}-01-01,${selectedYear}-12-31`
		);
	};
	const handleClick = (url: string) => {
		urlHandler(url);
		setSelectedUrl(url);
	};

	// Fetch data from API to display main data
	useEffect(() => {
		const fetchData = async () => {
			let updateUrl = `${baseApiUrl}${defaultUrlParams}${date}`;
			setUrl(updateUrl);

			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('error');
				}
				const data = await response.json();
				setData(data.results);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [count, url, defaultUrlParams, baseApiUrl, date, APIKEY]);

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

	// Add game to favoris

	const handleAddFavoris = (gameSelected: GameCardType) => {
		//Si l'élément existe déja
		const isAlreadyFavorited = listFavorite.some(
			(item) => item.id === gameSelected.id
		);
		const copy = [...listFavorite];
		if (isAlreadyFavorited) {
			// Si c'est déjà en favoris je supprime
			const updatedList = copy.filter(
				(item: GameCardType) => item.id !== gameSelected.id
			);
			setListFavorite(updatedList);
			// update du localstorage
			localStorage.setItem('favoris', JSON.stringify(updatedList));
		} else {
			// Si pas en favoris update
			copy.push(gameSelected);

			setListFavorite(copy);
			// sauvegarde dans le localstorage
			localStorage.setItem('favoris', JSON.stringify(copy));
		}
	};

	useEffect(() => {
		const favoriteListStorage = localStorage.getItem('favoris');
		if (favoriteListStorage) {
			const favoris = JSON.parse(favoriteListStorage);
			setListFavorite(favoris);
		}
	}, []);

	// Change page left right

	const contextValue: MyContextType = {
		url,
		urlHandler,
		data,
		inputValue,
		setInputValue,
		dataSearchInput,
		resetInput,
		handleChange,
		handleAddFavoris,
		listFavorite,
		count,
		setCount,
		handleClick,
		selectedUrl,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
