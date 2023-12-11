'use client';
import DisplayGames from './Home/displaygames';
import { LeftMenu } from './Home/LeftMenu/LeftMenu';
import { Header } from './Home/Header/Header';
import { Navmenu } from '../src/components/navmenu';
import { useState } from 'react';
import Pagination from './Home/pagination';
export default function Home() {
	const [selectedUrl, setSelectedUrl] = useState('2023');
	const [pageIndex, setPageIndex] = useState(1);
	return (
		<>
			<Header />
			<LeftMenu selectedUrl={selectedUrl} setSelectedUrl={setSelectedUrl} />
			<main className=" mt-16 w-[calc(100vw)-320px] lg:ml-[290px] grid-cols-1  mx-auto  pb-14 selection:bg-primary ">
				<DisplayGames
					selectedUrl={selectedUrl}
					pageIndex={pageIndex}
					setPageIndex={setPageIndex}
				/>
				<Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} />
			</main>
			<Navmenu />
		</>
	);
}
