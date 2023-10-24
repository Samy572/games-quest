'use client';
import { GameCardType } from '@/src/types/game';
import Displayplatforms from '@/src/components/displayplatforms';
import { Badge } from '@/src/components/ui/badge';
import Favoris from './favoris';
import Context from '@/context/Context';
import { useContext } from 'react';

const Body = ({ selectedGameData }: { selectedGameData: GameCardType }) => {
	const { handleAddFavoris, listFavorite } = useContext(Context);
	return (
		<div className="text-left pt-5 text-4xl">
			<h2 className="pb-5 text-primary">{selectedGameData.name}</h2>
			<div className="flex  items-center">
				<span className=" text-xl">Released: {selectedGameData.released}</span>
			</div>
			<div className="flex justify-between">
				<div className="flex items-center gap-1">
					{selectedGameData?.genres.slice(0, 2).map((genre) => (
						<Badge
							variant={'secondary'}
							key={genre.id}
							className="w-fit bg-primary"
						>
							{genre.name}
						</Badge>
					))}
				</div>
				<Displayplatforms platforms={selectedGameData.platforms} img="../img" />
			</div>
			<Favoris
				onClick={() => handleAddFavoris(selectedGameData)}
				description={
					listFavorite.some((item: any) => item.id === selectedGameData.id)
						? 'Remove from favoris'
						: 'Add to favoris'
				}
				img={
					listFavorite.some((item: any) => item.id === selectedGameData.id)
						? '../img/Star_full.svg'
						: '../img/Star_empty.svg'
				}
			/>
		</div>
	);
};
export default Body;
