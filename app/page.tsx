'use client';
import Title from '../src/components/title';
import FetchContent from './Home/FetchContent';
import { LeftMenu } from './Home/LeftMenu/LeftMenu';
import { useContext } from 'react';
import Context from '@/context/Context';
import { Header } from './Home/Header/Header';

export default function Home() {
	const { url } = useContext(Context);

	const title = (url: string) => {
		const yearToTitleMap: { [key: string]: string } = {
			'2023': 'Top of the year.',
			'2022': 'Popular in 2022.',
			'2021': 'Popular in 2021.',
		};

		const matchedYear = Object.keys(yearToTitleMap).find((year) =>
			url.includes(year)
		);

		return matchedYear ? yearToTitleMap[matchedYear] : 'Top of the year';
	};
	return (
		<>
			<Header />

			<LeftMenu />
			<main className=" mt-16 w-[calc(100vw)-320px] lg:ml-[290px] grid-cols-1  mx-auto">
				<Title title={title(url)} />
				<FetchContent />
			</main>
		</>
	);
}
// h-[calc(100vh-55.99px)] w-full grid lg:grid-cols-[320px_minmax(1024px,_1fr)_100px] grid-cols-1 pt-14
