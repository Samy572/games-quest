'use client';
import { Search } from 'lucide-react';
import { BurgerMenu } from './Menu/BurgerMenu';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Logo } from './Menu/Logo';
import { useEffect, useState } from 'react';
import SearchList from '@/components/searchlist';

export const Header = () => {
	const [inputValue, setInputValue] = useState('');
	const [data, setData] = useState([]);
	const APIKEY = process.env.SECRET;
	const searchGames = `https://api.rawg.io/api/games?key=${APIKEY}&search=${inputValue}`;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	useEffect(() => {
		if (inputValue === '') {
			setData([]);
			return;
		}
		const fetchGames = async () => {
			try {
				const response = await fetch(searchGames);
				const data = await response.json();
				setData(data.results);
			} catch (error) {
				console.error('error :', error);
			}
		};

		fetchGames();
	}, [inputValue, searchGames]);

	return (
		<header
			className="  w-full top-0 z-10  pt-5 flex items-center justify-around
     transition-all lg:justify-center  "
		>
			{' '}
			<Logo />
			<div className="input flex items-center ">
				<Label
					htmlFor="search"
					className=" absolute left-0 bottom-2.5 px-1 text-sm  text-black z-20 font-bold"
				>
					<Search size={16} />
				</Label>
				<Input
					id="search"
					className="z-10 relative bg-slate-300 rounded-2xl text-black  px-6 w-32 sm:w-80 hover:bg-white lg:w-96 focus:bg-white   
        "
					type="text"
					placeholder="Rechercher un jeu"
					onChange={(e) => handleChange(e)}
				/>
			</div>
			{data.length > 0 ? (
				<div className="flex flex-col z-30 absolute top-16	-10 right-auto border-2 w-full  sm:w-80  lg:w-96 border-slate-300 bg-slate-300 rounded-lg text-black  py-2 shadow-md ">
					{data
						.slice(0, 10)
						.map(({ name, id }: { name: string; id: number }) => (
							<SearchList key={id} name={name} />
						))}
				</div>
			) : null}
			<BurgerMenu />
		</header>
	);
};
