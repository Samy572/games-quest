import List from '@/components/ui/list';
import { Flame, Trophy } from 'lucide-react';
import Image from 'next/image';
export const LeftMenu = () => {
	return (
		<nav className="text-gray-200  flex-col  pt-16 w-fit transition-all hidden lg:flex pl-10 ">
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
				<List Icon={<Trophy />} name="Top de l'année" path="" />
				<List Icon={<Flame />} name="Populaire en 2022" path="" />
				<List Icon={<Flame />} name="Populaire en 2021" path="" />
			</ul>
			<ul>
				<h2 className="text-xl py-5">
					<strong>Plateformes</strong>
				</h2>
				<List
					Icon={
						<Image src={'/img/microsoft.svg'} alt="PC" width={22} height={22} />
					}
					name="PC"
					path=""
				/>
				<List
					Icon={<Image src={'/img/ps5.svg'} alt="PC" width={22} height={22} />}
					name="Playstation"
					path=""
				/>
				<List
					Icon={<Image src={'/img/xbox.svg'} alt="PC" width={22} height={22} />}
					name="Xbox"
					path=""
				/>
			</ul>
		</nav>
	);
};
