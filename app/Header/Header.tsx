'use client';
import { Search } from 'lucide-react';
import { Logo } from './Menu/Logo';
import { BurgerMenu } from './Menu/BurgerMenu';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export const Header = () => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};

	return (
		<header
			className="  w-full top-0 z-10  pt-5 flex items-center justify-around
     transition-all lg:justify-center  "
		>
			{' '}
			<Logo />
			<div className="input flex items-center relative">
				<Label
					htmlFor="search"
					className=" absolute left-0 bottom-2.5   px-1 text-sm   text-black z-10 font-bold"
				>
					<Search size={16} />
				</Label>
				<Input
					id="search"
					className="bg-slate-300 rounded-2xl text-black  px-6 w-32 sm:w-80 hover:bg-white lg:w-96 focus:bg-white   
        "
					type="text"
					placeholder="Rechercher un jeu"
					onChange={handleChange}
				/>
			</div>
			<BurgerMenu />
		</header>
	);
};
