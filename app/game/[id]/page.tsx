'use client';
import { LeftMenu } from '@/app/Home/LeftMenu/LeftMenu';
import { Logo } from '@/src/components/Logo';
import { Skeleton } from '@/src/components/ui/skeleton';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';

function Game({ params }: { params: { id: number } }) {
	interface GameCardType {
		name: string;
		background_image: string;
		description_raw: string;
	}

	const [selectedGameData, setSelectedGameData] =
		useState<GameCardType | null>();
	const id = params.id;
	const urlGameSelected = `https://api.rawg.io/api/games/${id}?key=${process.env.SECRET}`;

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
	}, [urlGameSelected, selectedGameData]);

	return (
		<div>
			<Logo />
			<LeftMenu />
			{selectedGameData ? (
				<div className="pt-10  flex justify-center  ">
					<div className="flex flex-col w-[65rem] border">
						<Image
							src={selectedGameData.background_image}
							alt={selectedGameData.name}
							width={500}
							height={500}
							className="mx-auto opacity-80 rounded-2xl w-[35rem] h-[15rem] object-cover"
						/>
						<div className="text-center py-5 text-5xl">
							<h3>{selectedGameData.name}</h3>
						</div>
						<div className=" py-5 text-gl">
							{selectedGameData.description_raw}
						</div>
					</div>
				</div>
			) : (
				<Suspense>
					<Skeleton />
				</Suspense>
			)}
		</div>
	);
}
export default Game;
