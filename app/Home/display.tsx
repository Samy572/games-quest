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
import Loader from '@/src/components/ui/loader';
import useDisplayGame from '@/hooks/useDisplayGame';
import Title from '@/src/components/title';
import SwitchYears from '@/src/components/switchyears';
type Props = {
	selectedUrl: string;
	pageIndex: number;
	setPageIndex: (num: number) => void;
	setSelectedUrl: (str: string) => void;
};
const DisplayGames = ({
	selectedUrl,
	pageIndex,
	setPageIndex,
	setSelectedUrl,
}: Props) => {
	const { games, error, isLoading } = useDisplayGame({
		selectedUrl,
		pageIndex,
		setPageIndex,
	});

	if (isLoading) return <Loader />;
	if (error) return <div>Error</div>;

	const switchUp = (selectedUrl: string) => {
		const copySelectedUrl = parseInt(selectedUrl);
		if (copySelectedUrl === 2024) {
			return setSelectedUrl('2024');
		}
		if (copySelectedUrl !== 2024) {
			return setSelectedUrl(String(copySelectedUrl + 1));
		}
	};

	const switchDown = (selectedUrl: string) => {
		const copySelectedUrl = parseInt(selectedUrl);
		return setSelectedUrl(String(copySelectedUrl - 1));
	};

	return (
		<div>
			<div className="relative">
				<Title label={'Popular in '} selectedUrl={selectedUrl} />
				<SwitchYears
					className="absolute top-0 gap-y-1 right-10 flex flex-col lg:hidden"
					onClickUp={() => switchUp(selectedUrl)}
					onClickDown={() => switchDown(selectedUrl)}
				/>
			</div>
			<div className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center place-items-center gap-2 grid-cols-1 mx-auto px-5 pt-10 ">
				{games &&
					games.results &&
					games.results.length > 0 &&
					games.results.map(
						({
							name,
							background_image,
							genres,
							platforms,
							id,
						}: GameCardType) => (
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
										quality={25}
										priority={true}
										style={{ width: '400px', height: '200px' }}
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
		</div>
	);
};
export default DisplayGames;
