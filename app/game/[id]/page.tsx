'use client';
import { LeftMenu } from '@/app/Home/LeftMenu/LeftMenu';
import { Logo } from '@/src/components/Logo';
import { Navmenu } from '@/src/components/navmenu';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import List from '@/src/components/ui/list';
import { displayIcon } from '@/utils/DisplayIcon';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Body from '../body';
import { GameCardType } from '@/src/types/game';

function Game({ params }: { params: { id: number } }) {
	const [selectedGameData, setSelectedGameData] =
		useState<GameCardType | null>();
	const [isShowMore, setIsShowMore] = useState(false);
	const id = params.id;
	const urlGameSelected = `https://api.rawg.io/api/games/${id}?key=${process.env.SECRET}`;

	useEffect(() => {
		const fetchGames = async () => {
			try {
				const response = await fetch(urlGameSelected);
				const data = await response.json();
				setSelectedGameData(data);
				console.log('data :', data);
			} catch (error) {
				console.error('error :', error);
			}
		};
		fetchGames();
	}, [urlGameSelected]);

	return (
		<div className="px-4 select-none pb-14 ">
			<Logo className="pt-5" />
			<LeftMenu />
			{selectedGameData && (
				<div className="pt-5  flex justify-center  ">
					<div className="flex flex-col w-[45rem] md:w-[34rem] xl:w-[45rem] ">
						<Image
							src={selectedGameData.background_image}
							alt={selectedGameData.name}
							width={500}
							height={500}
							quality={65}
							priority={false}
							className="mx-auto opacity-80 rounded-2xl w-[45rem]  h-[18rem] object-cover shadow-md"
						/>
						{/* <div className="text-left py-5 text-4xl">
							<h2 className="pb-5 text-lime-300">{selectedGameData.name}</h2>
							<div className="flex justify-between items-center">
								<span className=" text-xl">
									Released: {selectedGameData.released}
								</span>

								<div className="flex items-center gap-1">
									{selectedGameData?.genres.slice(0, 2).map((genre) => (
										<Badge
											variant={'secondary'}
											key={genre.id}
											className="w-fit "
										>
											{genre.name}
										</Badge>
									))}
								</div>
								<div className="flex ">
									{selectedGameData?.platforms
										.slice(0, 2)
										.map(({ platform: { id, name } }) => (
											<List key={id} Icon={displayIcon(name)} />
										))}
								</div>
							</div>
						</div> */}
						<Body selectedGameData={selectedGameData} />
						<div className=" py-5 text-slate-400">
							{isShowMore === false &&
							selectedGameData.description_raw.length > 200 ? (
								<p>
									{selectedGameData.description_raw
										.split('')
										.slice(0, 200)
										.join('')}
									...
								</p>
							) : (
								<p>{selectedGameData.description_raw} </p>
							)}
							{isShowMore ? (
								<Button
									variant={'outline'}
									className="mt-5"
									onClick={() => setIsShowMore(!isShowMore)}
								>
									show less
								</Button>
							) : (
								selectedGameData.description_raw.length > 200 && (
									<Button
										variant={'outline'}
										className="mt-5"
										onClick={() => setIsShowMore(!isShowMore)}
									>
										show more
									</Button>
								)
							)}
						</div>
					</div>
				</div>
			)}
			<Navmenu />
		</div>
	);
}
export default Game;
