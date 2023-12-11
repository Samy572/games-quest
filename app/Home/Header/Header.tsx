'use client';
import { Search, X } from 'lucide-react';
import { Label } from '../../../src/components/ui/label';
import { Input } from '../../../src/components/ui/input';
import { Logo } from '../../../src/components/logo';
import DataListMap from './datalistmap';
import { ModeToggle } from '@/src/components/ui/mode-toggle';
import { useQuery } from 'react-query';
import useDebounce from '@/hooks/useDebounce';
import useSearch from '@/hooks/useSearch';
import Title from '@/src/components/title';

export const Header = () => {
	const { searchInput, handleSearch, searchGames, resetInput } = useSearch();
	const debounce = useDebounce(searchInput, 300);

	const { data, error, isLoading } = useQuery({
		queryKey: [
			'search',
			debounce,
			{
				enabled: false,
			},
		],
		queryFn: () => {
			if (debounce) {
				return searchGames();
			}
			return { results: [] };
		},
	});

	if (error) return <div>Error</div>;

	return (
		<header className="w-full top-0 z-10 pt-5 flex items-center justify-around transition-all lg:justify-center relative">
			<ModeToggle className={'absolute right-5 cursor-pointer select-none '} />
			<Logo />
			<div className="input md:flex items-center relative hidden">
				<label
					htmlFor="search"
					className="absolute left-0 bottom-2.5 px-2 text-sm text-foreground z-10 font-bold"
					title="Search "
				>
					<Search size={16} />
				</label>
				<Input
					id="search"
					className="dark:bg-neutral-800 rounded-2xl transition-all text-foreground px-7 w-32 sm:w-80 hover:bg-white lg:w-96 focus:bg-white ring-2 ring-primary ring-inset focus:"
					placeholder="Search game"
					onChange={(e) => handleSearch(e)}
					value={searchInput}
				/>
				{data && data?.results.length > 0 && (
					<button
						type="button"
						onClick={() => resetInput()}
						className="absolute right-2 bottom-1.5 text-foreground"
					>
						<X />
					</button>
				)}
				{data && data?.results.length > 0 && (
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
