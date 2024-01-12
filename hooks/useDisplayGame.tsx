'use client';
import { useState } from 'react';
import { useQuery } from 'react-query';

const useDisplayGame = ({
	selectedUrl,
	pageIndex,
	setPageIndex,
}: {
	selectedUrl: string;
	pageIndex: number;
	setPageIndex: (num: number) => void;
}) => {
	const {
		data: games,
		error,
		isLoading,
	} = useQuery({
		queryKey: ['games', selectedUrl, pageIndex, setPageIndex],
		queryFn: () => fetchGames(selectedUrl, pageIndex, setPageIndex),
	});

	const [prevSelectedUrl, setPrevSelectedUrl] = useState<string | null>(null);

	

	const fetchGames = async (
		selectedUrl: string,
		pageIndex: number,
		setPageIndex: (num: number) => void
	) => {
		try {
			setPrevSelectedUrl(selectedUrl);
			if (prevSelectedUrl !== selectedUrl) {
				setPageIndex(1);
			}
			const response = await fetch(
				`https://api.rawg.io/api/games?&key=${process.env.NEXT_PUBLIC_SECRET}&dates=${selectedUrl}-01-01,${selectedUrl}-12-31&page=${pageIndex}&page_size=15`
			);

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const data = await response.json();
			return data;
		} catch (err) {
			console.error(err);
			throw err;
		}
	};

	return {
		games,
		isLoading,
		error,
	};
};
export default useDisplayGame;
