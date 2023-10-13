'use client';
import List from '@/components/ui/list';
import Context from '@/context/Context';
import { Flame, Trophy } from 'lucide-react';
import Image from 'next/image';
import { useContext } from 'react';
export const LeftMenu = () => {
	const { urlHandler } = useContext(Context);

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
						onClick={() => urlHandler('url2023')}
						name="Top de l'année"
					/>
					<List
						Icon={<Flame />}
						onClick={() => urlHandler('url2022')}
						name="Populaire en 2022"
					/>
					<List
						Icon={<Flame />}
						onClick={() => urlHandler('url2021')}
						name="Populaire en 2021"
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
