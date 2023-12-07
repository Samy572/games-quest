'use client';
import { Logo } from '@/src/components/Logo';
import { Navmenu } from '@/src/components/navmenu';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Body from '../body';
import { GameCardType } from '@/src/types/game';
import Description from '../description';
import { LeftMenu } from '@/app/Home/LeftMenu/LeftMenu';

function Game({ params }: { params: { id: number } }) {
	const [selectedGameData, setSelectedGameData] =
		useState<GameCardType | null>();
	const id = params.id;
	const urlGameSelected = `https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_SECRET}`;

	useEffect(() => {
		const fetchGames = async () => {
			try {
				const response = await fetch(urlGameSelected);
				const data = await response.json();
				setSelectedGameData(data);
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
						<Body selectedGameData={selectedGameData} />
						<Description selectedGameData={selectedGameData} />
					</div>
				</div>
			)}

			<Navmenu />
		</div>
	);
}
export default Game;
