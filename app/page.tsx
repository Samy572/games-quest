'use client';
import Title from '../src/components/title';
import FetchContent from './Home/FetchContent';
import { LeftMenu } from './Home/LeftMenu/LeftMenu';
import { useContext } from 'react';
import Context from '@/context/Context';
import { Header } from './Home/Header/Header';
import { Navmenu } from '../src/components/navmenu';
export default function Home() {
	const { url } = useContext(Context);

	const title = (url: string) => {
		console.log(url);
		const yearToTitleMap: { [key: string]: string } = {
			'2023': 'Top of the year.',
			'2022': 'Popular in 2022.',
			'2021': 'Popular in 2021.',
			'2020': 'Popular in 2020.',
			'2019': 'Popular in 2019.',
			'2018': 'Popular in 2018.',
			'2017': 'Popular in 2017.',
			'2016': 'Popular in 2016.',
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
			<main className=" mt-16 w-[calc(100vw)-320px] lg:ml-[290px] grid-cols-1  mx-auto  pb-12 ">
				<Title title={title(url)} />
				<FetchContent />
			</main>
			<Navmenu />
		</>
	);
}
