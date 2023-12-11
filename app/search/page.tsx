'use client';
import { Input } from '@/src/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import DataListMap from '@/app/Home/Header/datalistmap';
import useSearch from '@/hooks/useSearch';
import useDebounce from '@/hooks/useDebounce';
import { useQuery } from 'react-query';

function Page() {
	const { searchGames, handleSearch, searchInput, resetInput } = useSearch();
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
		<div className="relative ">
			<div className="contain flex h-12 justify-center items-center gap-1">
				<Link onClick={() => resetInput()} href={'/home'}>
					<ArrowLeft size={20} />
				</Link>
				<Input
					className="rounded-xl h-7   w-80"
					placeholder="Search games"
					autoFocus
					onChange={(e) => handleSearch(e)}
				/>
			</div>

			{searchInput.length > 0 ? (
				<DataListMap
					data={data ? data.results : []}
					reset={resetInput}
					className={
						'flex flex-col z-30  w-full mx-auto  rounded-lg text-primary    shadow-md'
					}
				/>
			) : null}
		</div>
	);
}
export default Page;

//
