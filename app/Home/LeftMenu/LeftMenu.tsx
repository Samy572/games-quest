'use client';
import List from '@/components/ui/list';
import Context from '@/context/Context';
import { Flame, Trophy } from 'lucide-react';
import Image from 'next/image';
import { useContext, useState } from 'react';
export const LeftMenu = () => {
	const { urlHandler } = useContext(Context);
	const [selectedUrl, setSelectedUrl] = useState('url2023');

	const handleClick = (url: string) => {
		urlHandler(url);
		setSelectedUrl(url);
	};

	return (
		<nav className="text-gray-200  flex-col  pt-16 w-fit transition-all hidden lg:flex pl-10 select-none ">
			<div className="navigation fixed top-28">
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
						active={selectedUrl === 'url2023'}
					/>
					<List
						Icon={<Flame />}
						onClick={() => handleClick('url2022')}
						name="Populaire en 2022"
						active={selectedUrl === 'url2022'}
					/>
					<List
						Icon={<Flame />}
						onClick={() => handleClick('url2021')}
						name="Populaire en 2021"
						active={selectedUrl === 'url2021'}
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
