'use client';
import Context from '@/context/Context';
import Displayplatforms from '@/src/components/displayplatforms';
import { Navmenu } from '@/src/components/navmenu';
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/src/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { ArrowLeft } from 'lucide-react';

function MyList() {
	const { listFavorite } = useContext(Context);
	return (
		<div>
			{listFavorite.length > 0 && (
				<div className="h-28 flex items-center  ">
					<Link className="ml-10 mr-10" href={'/home'}>
						<ArrowLeft size={32} />
					</Link>
					<h2 className="md:text-4xl text-2xl  font-semibold text-left ">
						My List ✨{' '}
					</h2>
				</div>
			)}
			{listFavorite.length > 0 ? (
				<div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center place-items-center gap-2 grid-cols-1 mx-auto px-5 py-10">
					{listFavorite.map(
						({ id, name, background_image, platforms, genres }: any) => {
							return (
								<Card
									key={id}
									className="bg-stone-900 hover:bg-stone-800 border-stone-700 transition-all   "
								>
									<CardHeader>
										<Image
											src={background_image}
											alt={name}
											width={400}
											height={400}
											priority={false}
											quality={65}
										/>

										<CardTitle
											className="text-3xl text-gray-100 font-roboto overflow-hidden truncate whitespace-nowrap xl:w-[250px] w-[250px] "
											title={name}
										>
											{' '}
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
												<Displayplatforms platforms={platforms} img="img" />
											</ul>
										</CardDescription>
									</CardHeader>
									<CardFooter>
										<Link
											href={`/game/${id}`}
											className="text-lime-300  underline"
										>
											See more
										</Link>
									</CardFooter>
								</Card>
							);
						}
					)}
				</div>
			) : (
				<div className=" flex justify-center items-center pt-12 px-5">
					<h2 className="text-3xl">
						Add games to your collection{' '}
						<Link className="underline text-lime-300" href={'/home'}>
							here
						</Link>
					</h2>
				</div>
			)}
			<Navmenu />
		</div>
	);
}

export default MyList;
