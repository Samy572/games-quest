import { GameCardType } from './game';

export interface MyContextType {
	url: string;
	urlHandler: (url: string) => void;
	data: any;
	inputValue: string;
	setInputValue: (value: string) => void;
	dataSearchInput: any;
	resetInput: () => void;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleAddFavoris: (gameSelected: GameCardType) => void;
	listFavorite: GameCardType[];
	count: number;
	setCount: (count: number) => void;
}
