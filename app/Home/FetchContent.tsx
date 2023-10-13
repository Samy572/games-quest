'use client';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Context from '@/context/Context';
import Image from 'next/image';
import { useContext } from 'react';

const FetchContent = () => {
	const { data } = useContext(Context);
	interface GameCardType {
		name: string;
		background_image: string;
		genres: [];
		id: number;
	}

	return (
		<div className="w-full grid md:grid-cols-2 lg:grid-cols-3 items-center place-items-center gap-2 grid-cols-1 px-5 pt-10 transition-all ">
			{data.map(({ name, background_image, genres, id }: GameCardType) => (
				<Card
					key={id}
					className="bg-stone-900 border-stone-700 transition-all hover:bg-stone-800 hover:scale-110 "
				>
					<CardHeader>
						<Image
							className="h-auto w-auto"
							src={background_image}
							alt={name}
							width={300}
							height={300}
							objectFit="cover"
							loading="lazy"
							style={{ width: '100%', height: 'auto' }}
						/>
						<CardTitle
							className="text-3xl text-gray-100 font-roboto overflow-hidden truncate whitespace-nowrap xl:w-[250px] w-[250px] "
							title={name}
						>
							{name}
						</CardTitle>
						<CardDescription>
							<h3 className="text-xl text-gray-200 ">
								<strong>Genres:</strong>
							</h3>
							{genres.slice(0, 2).map((genre: { name: string }) => (
								<ul key={genre.name} className="space-y-6">
									<li>{genre.name}</li>
								</ul>
							))}
						</CardDescription>
					</CardHeader>
				</Card>
			))}
		</div>
	);
};
export default FetchContent;
