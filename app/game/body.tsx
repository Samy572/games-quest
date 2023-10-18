import { GameCardType } from '@/src/types/game';
import Displayplatforms from '@/src/components/displayplatforms';
import { Badge } from '@/src/components/ui/badge';

const Body = ({ selectedGameData }: { selectedGameData: GameCardType }) => {
	return (
		<div className="text-left py-5 text-4xl">
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
		</div>
	);
};
export default Body;
