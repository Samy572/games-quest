export interface MyContextType {
	toggleMenu: boolean;
	toggleMenuHandler: () => void;
	url: string;
	urlHandler: (url: string) => void;
	data: any;
	inputValue: string;
	setInputValue: (value: string) => void;
	dataSearchInput: any;
	resetInput: () => void;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
