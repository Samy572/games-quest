export interface GameCardType {
	name: string;
	background_image: string;
	description_raw: string;
	released?: string;
	id: number;
	isChecked: false;
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

// On veut ajouter un jeu si il n'est pas dans notre list
// si il est dans notre list on ne l'ajoute pas
