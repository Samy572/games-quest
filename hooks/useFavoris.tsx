'use client';
import { GameCardType } from '@/src/types/game';
import { useEffect, useState } from 'react';

export const useFavoris = () => {
	const [listFavorite, setListFavorite] = useState<GameCardType[]>([]);

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
		} 
			// Si pas en favoris update
      if(!isAlreadyFavorited){
        copy.push(gameSelected);
      }

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
	return { handleAddFavoris, listFavorite };
};
export default useFavoris;
