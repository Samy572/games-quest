'use client';
import List from '../../../src/components/ui/list';
import Context from '../../../context/Context';
import { ChevronDown, ChevronUp, Flame, Trophy } from 'lucide-react';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';

export const LeftMenu = () => {
	const { urlHandler } = useContext(Context);
	const [selectedUrl, setSelectedUrl] = useState('2023');
	const [year, setYear] = useState(['2023', '2022', '2021', '2020']);
	const handleClick = (url: string) => {
		urlHandler(url);
		setSelectedUrl(url);
	};

	const showMoreYear = () => {
		const copy = [...year];
		if (year.length < 5) {
			copy.push('2019', '2018', '2017', '2016');
			setYear(copy);
		}
		if (year.length > 5) {
			setYear(copy.slice(0, 4));
		}
	};

	return (
		<nav className="text-gray-200 md:cols-span-1 md:w-[320px]  pt-16 w-fit transition-all hidden lg:flex pl-10 select-none overflow-y-auto max-h-[700px] scroll fixed">
			<div className="navigation ">
				<ul >
					<h2 className="text-2xl pb-14">
						<Link href={'/home'}>
							<strong>Home</strong>
						</Link>
					</h2>
				</ul>
				<ul>
					<h2 className="text-xl pb-5">
						<strong>Top</strong>
					</h2>
					{year.map((year) => (
						<List
							key={year}
							Icon={year === '2023' ? <Trophy /> : <Flame />}
							onClick={() => handleClick(year)}
							name={`Popular in ${year}`}
							active={selectedUrl === year}
						/>
					))}
					{year.length < 5 ? (
						<Button
							variant={'default'}
							className="mt-5 w-full flex flex-1 relative"
							onClick={() => showMoreYear()}
						>
							More
							<span className="absolute right-3">
								<ChevronDown />
							</span>
						</Button>
					) : (
						<Button
							className="mt-5 w-full flex flex-1 relative"
							onClick={() => showMoreYear()}
						>
							Less
							<span className="absolute right-3">
								<ChevronUp />
							</span>
						</Button>
					)}
				</ul>
			</div>
		</nav>
	);
};
