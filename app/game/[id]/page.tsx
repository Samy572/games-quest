'use client';
import Logo from '@/src/components/logo-title';
import { Navmenu } from '@/src/components/navmenu';
import Image from 'next/image';
import Body from '../body';
import Description from '../description';
import { useQuery } from 'react-query';
import Loader from '@/src/components/ui/loader';
import Home from '@/app/Home/LeftMenu/home';
import MyListMenu from '@/app/Home/LeftMenu/mylistmenu';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/src/components/ui/carousel';
import { useState } from 'react';

function Game({ params }: { params: { id: number } }) {
	const [dataImg, setDataImg] = useState<string[]>([]);
	const id = params.id;
	const urlGameSelected = `https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_SECRET}`;

	const getSelectedGameData = async () => {
		try {
			const response = await fetch(urlGameSelected);
			const data = await response.json();
			const copyDataImg = async () => {
				await data;
				const copy = [data?.background_image, data.background_image_additional];
				setDataImg(copy);
			};
			copyDataImg();
			return data;
		} catch (error) {
			return console.error('error :', error);
		}
	};

	const { data, error, isLoading } = useQuery({
		queryKey: ['games-selected'],
		queryFn: () => getSelectedGameData(),
	});

	if (isLoading) return <Loader />;

	if (error) return <div>Error</div>;

	return (
		<div className="px-4 select-none pb-14 ">
			<Logo className="pt-5  lg:text-left" />
			<nav className="hidden lg:block fixed top-44 left-10 right-0">
				<Home />
				<MyListMenu />
			</nav>
			{data && (
				<div className="pt-5  flex justify-center  ">
					<div className="flex flex-col w-[45rem] md:w-[34rem] xl:w-[45rem] ">
						<Carousel className="w-full ">
							<CarouselContent>
								{dataImg.map((item: string, index: number) => (
									<CarouselItem key={index}>
										<div className="p-1">
											<Image
												src={data && item}
												alt={data && data?.name}
												width={500}
												height={500}
												quality={65}
												priority={false}
												className="mx-auto opacity-80 rounded-2xl w-[45rem]  h-[18rem] object-cover shadow-md "
											/>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="hidden lg:flex" />
							<CarouselNext className="hidden lg:flex" />
						</Carousel>
						<Body selectedGameData={data && data} />
						<Description selectedGameData={data && data} />
					</div>
				</div>
			)}

			<Navmenu />
		</div>
	);
}
export default Game;
