'use client';
import Title from '@/components/title';
import FetchContent from './FetchContent';
import { LeftMenu } from './LeftMenu/LeftMenu';
import { useContext } from 'react';
import Context from '@/context/Context';

export const Home = () => {
	const { url } = useContext(Context);

	const title = (url: string) => {
		const yearToTitleMap: { [key: string]: string } = {
			'2023': "Top de l'année.",
			'2022': 'Populaire en 2022.',
			'2021': 'Populaire en 2021.',
		};

		const matchedYear = Object.keys(yearToTitleMap).find((year) =>
			url.includes(year)
		);

		return matchedYear ? yearToTitleMap[matchedYear] : "Top de l'année";
	};
	return (
		<>
			<Title title={title(url)} />
			<div className=" h-[calc(100vh-55.99px)] w-full grid lg:grid-cols-[320px_minmax(1024px,_1fr)_100px] grid-cols-1 pt-14 ">
				<LeftMenu />

				<FetchContent />
			</div>
		</>
	);
};
