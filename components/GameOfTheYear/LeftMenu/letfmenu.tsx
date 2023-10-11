import List from '@/components/ui/list';
import { Computer, Flame, Trophy, Gamepad2 } from 'lucide-react';
export const LeftMenu = () => {
	return (
		<nav className="text-gray-200 flex flex-col  pt-16 w-fit transition-all ">
			<ul className="">
				<h2 className="text-2xl pb-14">Accueil</h2>
			</ul>
			<ul>
				<h2 className="text-xl pb-5">Top</h2>
				<List Icon={<Trophy />} name="Top de l'année" path="" />
				<List Icon={<Flame />} name="Populaire en 2022" path="" />
				<List Icon={<Flame />} name="Populaire en 2021" path="" />
			</ul>
			<ul>
				<h2 className="text-xl py-5">Plateformes</h2>
				<List Icon={<Computer />} name="PC " path="" />
				<List Icon={<Gamepad2 />} name="Playstation " path="" />
				<List Icon={<Gamepad2 />} name="Xbox" path="" />
			</ul>
		</nav>
	);
};
