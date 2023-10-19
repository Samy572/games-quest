'use client';
import { GameCardType } from '@/src/types/game';
import Displayplatforms from '@/src/components/displayplatforms';
import { Badge } from '@/src/components/ui/badge';
import Favoris from './favoris';
import { useState } from 'react';

const Body = ({ selectedGameData }: { selectedGameData: GameCardType }) => {
	const [listFavorite, setListFavorite] = useState<GameCardType[]>([]);

	const handleAddFavoris = (gameSelected: GameCardType) => {
		//Si l'élément existe déja
		const isAlreadyFavorited = listFavorite.some(
			(item) => item.id === gameSelected.id
		);

		if (isAlreadyFavorited) {
			// Si c'est déjà favoris je supprime
			const updatedList = listFavorite.filter(
				(item: GameCardType) => item.id !== gameSelected.id
			);
			setListFavorite(updatedList);
		} else {
			// Si l'élément n'est pas en favoris
			setListFavorite([...listFavorite, gameSelected]);
		}
		console.log(listFavorite);
	};

	return (
		<div className="text-left pt-5 text-4xl">
			<h2 className="pb-5 text-lime-300">{selectedGameData.name}</h2>
			<div className="flex  items-center">
				<span className=" text-xl">Released: {selectedGameData.released}</span>
			</div>
			<div className="flex justify-between">
				<div className="flex items-center gap-1">
					{selectedGameData?.genres.slice(0, 2).map((genre) => (
						<Badge variant={'secondary'} key={genre.id} className="w-fit ">
							{genre.name}
						</Badge>
					))}
				</div>
				<Displayplatforms platforms={selectedGameData.platforms} img="../img" />
			</div>
			<Favoris
				onClick={() => handleAddFavoris(selectedGameData)}
				description={
					listFavorite.includes(selectedGameData)
						? 'Remove from favoris'
						: 'Add to favoris'
				}
				img={
					listFavorite.includes(selectedGameData)
						? '../img/Star_full.svg'
						: '../img/Star_empty.svg'
				}
			/>
		</div>
	);
};
export default Body;
