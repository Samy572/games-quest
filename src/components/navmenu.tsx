import { Home, Search, Star } from 'lucide-react';
import Link from 'next/link';

export const Navmenu = () => {
	return (
		<ul className="md:hidden h-12 text-xs bg-black  border-t text-white fixed bottom-0 left-0 right-0 flex items-center justify-evenly">
			<li>
				<span className="flex justify-center">
					<Home />
				</span>
				Home
			</li>
			<li>
				<span className="flex justify-center">
					<Search />
				</span>
				Search
			</li>
			<li>
				<Link href={'/mylist'} className="flex justify-center">
					<Star />
				</Link>
				My List
			</li>
		</ul>
	);
};
