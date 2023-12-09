'use client';
import { Search, X } from 'lucide-react';
import { Label } from '../../../src/components/ui/label';
import { Input } from '../../../src/components/ui/input';
import { Logo } from '../../../src/components/Logo';
import DataListMap from './datalistmap';
import { ModeToggle } from '@/src/components/ui/mode-toggle';
import { useQuery } from 'react-query';
import useDebounce from '@/hooks/useDebounce';
import { useState } from 'react';

export const Header = () => {
	const [searchInput, setSearchInput] = useState('');
	const debounce = useDebounce(searchInput, 300);

	const { data, error, isLoading } = useQuery({
		queryKey: ['search', debounce],
		queryFn: () => {
			if (debounce) {
				return fetch(
					`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_SECRET}&search=${searchInput}`
				).then((res) => res.json());
			}
			return { results: [] };
		},
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	const resetInput = () => {
		setSearchInput('');
	};

	if (error) return <div>Error</div>;

	return (
		<header className="w-full top-0 z-10 pt-5 flex items-center justify-around transition-all lg:justify-center relative">
			<ModeToggle className={'absolute right-5 cursor-pointer select-none '} />
			<Logo />
			<div className="input md:flex items-center relative hidden">
				<Label
					htmlFor="search"
					className="absolute left-0 bottom-2.5 px-2 text-sm text-black z-10 font-bold"
				>
					<Search size={16} />
				</Label>
				<Input
					id="search"
					className="bg-slate-100 rounded-2xl text-black px-7 w-32 sm:w-80 hover:bg-white lg:w-96 focus:bg-white focus:ring focus:ring-primary"
					type="search"
					placeholder="Search game"
					onChange={(e) => handleChange(e)}
					value={searchInput}
				/>
				{data?.results.length > 0 && (
					<button
						type="button"
						onClick={() => resetInput()}
						className="absolute right-2 bottom-1.5 text-black"
					>
						<X />
					</button>
				)}
				{data?.results.length > 0 && (
					<DataListMap
						data={data.results}
						reset={resetInput}
						className="flex flex-col z-40 absolute top-10 border-2 w-full sm:w-80 lg:w-96 shadow-md bg-secondary rounded-lg overflow-hidden"
					/>
				)}
			</div>
		</header>
	);
};
       