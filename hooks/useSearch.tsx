'use client';
import { useState } from 'react';

const useSearch = () => {
	const [searchInput, setSearchInput] = useState('');

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	const resetInput = () => {
		setSearchInput('');
	};

	const searchGames = async () => {
		return await fetch(
			`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_SECRET}&search=${searchInput}`
		).then((res) => res.json());
	};
	return {
		searchInput,
		handleSearch,
		resetInput,
		searchGames,
	};
};
export default useSearch;
