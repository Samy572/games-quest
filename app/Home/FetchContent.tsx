'use client';
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../../src/components/ui/card';
import List from '../../src/components/ui/list';
import Context from '../../context/Context';
import Image from 'next/image';
import { useContext } from 'react';
import Link from 'next/link';

const FetchContent = () => {
	const { data } = useContext(Context);
	interface GameCardType {
		name: string;
		background_image: string;
		genres: [];
		platforms: [];
		id: number;
	}

	const displayIcon = (name: string) => {
		switch (name) {
			case 'PC':
				return (
					<Image
						src="img/microsoft.svg"
						alt="pc"
						width={18}
						height={18}
						className="p-0"
					/>
				);
			case 'PlayStation':
			case 'PlayStation 5':
			case 'PlayStation 4':
				return (
					<Image src="img/ps5.svg" alt="playstation" width={18} height={18} />
				);
			case 'Xbox':
			case 'Xbox Series S/X':
				return <Image src="img/xbox.svg" alt="xbox" width={18} height={18} />;
		}
	};

	return (
		<div className="w-full grid md:grid-cols-2 lg:grid-cols-3 items-center place-items-center gap-2 grid-cols-1 px-5 pt-10 transition-all ">
			{data.map(
				({ name, background_image, genres, platforms, id }: GameCardType) => (
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
								<ul className=" flex justify-between ">
									<div className="text-gray-200">
										{genres.slice(0, 2).map((genre: { name: string }) => (
											<li key={genre.name}>{genre.name}</li>
										))}
									</div>
									<div className="flex ">
										{platforms.slice(0, 2).map(({ platform: { id, name } }) => (
											<List key={id} Icon={displayIcon(name)} platform={true} />
										))}
									</div>
								</ul>
							</CardDescription>
						</CardHeader>
						<CardFooter>
							<Link href={`/game/${id}`} className="text-lime-300  underline">
								See more
							</Link>
						</CardFooter>
					</Card>
				)
			)}
		</div>
	);
};
export default FetchContent;
