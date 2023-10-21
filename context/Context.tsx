import { GameCardType } from '@/src/types/game';
import { createContext } from 'react';

export default createContext({
	url: '',
	urlHandler: (url: string) => {},
	data: [],
	inputValue: '',
	setInputValue: (value: string) => {},
	dataSearchInput: [],
	resetInput: () => {},
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
	handleAddFavoris: (gameSelected: GameCardType) => {},
	listFavorite: [{}],
	count: 1,
	setCount: (count: number) => {},
});
