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
});
