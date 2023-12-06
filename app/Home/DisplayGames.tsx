import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../../src/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import Displayplatforms from '@/src/components/displayplatforms';
import { GameCardType } from '@/src/types/game';
import Pagination from './pagination';

const DisplayGames = ({ data }: { data: GameCardType[] }) => {
	return (
		<div>
			<div className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center place-items-center gap-2 grid-cols-1 mx-auto px-5 pt-10 ">
				{data?.map(
					({ name, background_image, genres, platforms, id }: GameCardType) => (
						<Card
							key={id}
							className="  transition-all hover:bg-slate-100  dark:hover:bg-[#121212] "
						>
							<CardHeader>
								<Image
									className="h-auto w-auto"
									src={background_image}
									alt={name}
									width={300}
									height={300}
									quality={15}
									priority={false}
									style={{ width: '100%', height: 'auto' }}
								/>
								<CardTitle
									className="text-3xl  font-roboto overflow-hidden truncate whitespace-nowrap xl:w-[250px] w-[250px] "
									title={name}
								>
									{name}
								</CardTitle>
								<CardDescription>
									<h3 className="text-xl  ">
										<strong>Genres:</strong>
									</h3>
									<ul className=" flex justify-between ">
										<div className="">
											{genres.slice(0, 2).map((genre: { name: string }) => (
												<li key={genre.name}>{genre.name}</li>
											))}
										</div>
										<Displayplatforms platforms={platforms} img="img" />
									</ul>
								</CardDescription>
							</CardHeader>
							<CardFooter>
								<Link
									href={`/game/${id}`}
									className=" cursor-pointer underline text-primary font-semibold"
								>
									See more
								</Link>
							</CardFooter>
						</Card>
					)
				)}
			</div>

			{data.length >= 15 && <Pagination />}
		</div>
	);
};
export default DisplayGames;
