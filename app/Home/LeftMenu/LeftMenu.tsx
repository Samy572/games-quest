'use client';
import List from '../../../src/components/ui/list';
import { ChevronDown, ChevronUp, Flame, Sparkles, Trophy } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import MyListMenu from './mylistmenu';
import Home from './home';
type Props = {
	selectedUrl: string;
	setSelectedUrl: React.Dispatch<React.SetStateAction<string>>;
};
export const LeftMenu = ({ selectedUrl, setSelectedUrl }: Props) => {
	const [year, setYear] = useState(['2024', '2023', '2022', '2021']);

	const showMoreYear = () => {
		const copy = [...year];
		if (year.length < 5) {
			copy.push('2020', '2019', '2018', '2017', '2016');
			setYear(copy);
		}
		if (year.length > 5) {
			setYear(copy.slice(0, 4));
		}
	};

	return (
		<nav className=" md:cols-span-1 md:w-[320px]  pt-16 w-fit transition-all hidden lg:flex pl-10 select-none overflow-y-auto max-h-[700px] scroll fixed">
			<div className="navigation ">
				<Home />
				<ul>
					<h2 className="text-xl pb-5">
						<strong>Top</strong>
					</h2>
					{year.map((year) => (
						<List
							className="flex w-full justify-between"
							key={year}
							Icon={
								year === '2024' ? (
									<Trophy className="text-amber-500" />
								) : (
									<Flame className="text-red-800  " />
								)
							}
							onClick={() => {
								setSelectedUrl(year);
							}}
							name={` Popular in ${year}`}
							active={selectedUrl === year}
						/>
					))}
					{year.length < 5 ? (
						<Button
							variant={'default'}
							className="mt-5 w-full flex flex-1 relative text-white font-bold bg-primary/80"
							onClick={() => showMoreYear()}
						>
							More
							<span className="absolute right-3">
								<ChevronDown />
							</span>
						</Button>
					) : (
						<Button
							className="mt-5 w-full flex flex-1 relative text-white bg-primary/80"
							onClick={() => showMoreYear()}
						>
							Less
							<span className="absolute right-3">
								<ChevronUp />
							</span>
						</Button>
					)}
				</ul>
				<MyListMenu />
			</div>
		</nav>
	);
};
