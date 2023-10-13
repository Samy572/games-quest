'use client';
import List from '@/components/ui/list';
import Context from '@/context/Context';
import { Flame, Trophy } from 'lucide-react';
import Image from 'next/image';
import { useContext, useState } from 'react';
export const LeftMenu = () => {
	const { urlHandler } = useContext(Context);
	const [isClicked, setIsClicked] = useState([
		{ url2023: true },
		{ url2022: false },
		{ url2021: false },
	]);
	const handleClick = (url: string) => {
		urlHandler(url);
		switch (url) {
			case 'url2023':
				setIsClicked([
					{ url2023: true },
					{ url2022: false },
					{ url2021: false },
				]);
				break;
			case 'url2022':
				setIsClicked([
					{ url2023: false },
					{ url2022: true },
					{ url2021: false },
				]);
				break;
			case 'url2021':
				setIsClicked([
					{ url2023: false },
					{ url2022: false },
					{ url2021: true },
				]);
				break;
		}
	};

	return (
		<nav className="text-gray-200  flex-col  pt-16 w-fit transition-all hidden lg:flex pl-10  ">
			<div className="navigation fixed">
				<ul className="">
					<h2 className="text-2xl pb-14">
						{' '}
						<strong>Accueil</strong>
					</h2>
				</ul>
				<ul>
					<h2 className="text-xl pb-5">
						<strong>Top</strong>
					</h2>
					<List
						Icon={<Trophy />}
						onClick={() => handleClick('url2023')}
						name="Top de l'année"
						active={isClicked[0].url2023}
					/>
					<List
						Icon={<Flame />}
						onClick={() => handleClick('url2022')}
						name="Populaire en 2022"
						active={isClicked[1].url2022}
					/>
					<List
						Icon={<Flame />}
						onClick={() => handleClick('url2021')}
						name="Populaire en 2021"
						active={isClicked[2].url2021}
					/>
				</ul>
				<ul>
					<h2 className="text-xl py-5">
						<strong>Plateformes</strong>
					</h2>
					<List
						Icon={
							<Image
								src={'/img/microsoft.svg'}
								alt="PC"
								width={22}
								height={22}
							/>
						}
						name="PC"
					/>
					<List
						Icon={
							<Image src={'/img/ps5.svg'} alt="PC" width={22} height={22} />
						}
						name="Playstation"
					/>
					<List
						Icon={
							<Image src={'/img/xbox.svg'} alt="PC" width={22} height={22} />
						}
						name="Xbox"
					/>
				</ul>
			</div>
		</nav>
	);
};
