export interface GameCardType {
	name: string;
	background_image: string;
	description_raw: string;
	released?: string;
	id: number;
	isChecked: false;
	website: string;
	rating: number;
	genres: [
		{
			name: string;
			id: number;
		}
	];
	platforms: [
		{
			platform: {
				name: string;
				id: number;
			};
		}
	];
}
