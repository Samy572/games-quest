'use client';
import Title from '../src/components/title';
import DisplayGames from './Home/DisplayGames';
import { LeftMenu } from './Home/LeftMenu/LeftMenu';
import { useContext } from 'react';
import Context from '@/context/Context';
import { Header } from './Home/Header/Header';
import { Navmenu } from '../src/components/navmenu';
import { title } from '@/utils/GetTitle';
export default function Home() {
	const { url, data } = useContext(Context);

	return (
		<>
			<Header />
			<LeftMenu />
			<main className=" mt-16 w-[calc(100vw)-320px] lg:ml-[290px] grid-cols-1  mx-auto  pb-14 ">
				<Title title={title(url)} />
				
				<DisplayGames data={data} />
			</main>
			<Navmenu />
		</>
	);
}
