import { Home, Search, Star } from 'lucide-react';
import Link from 'next/link';

export const Navmenu = () => {
	return (
		<div>
			<ul className="md:hidden h-12 text-xs bg-black  border-t border-slate-400 text-white fixed bottom-0 left-0 right-0 flex items-center justify-evenly opacity-90 ">
				<Link href={'/home'}>
					<span className="flex justify-center">
						<Home size={20} />
					</span>
					Home
				</Link>
				<Link href={'/search'}>
					<span className="flex justify-center">
						<Search size={20} />
					</span>
					Search
				</Link>
				<li>
					<Link href={'/mylist'} className="flex justify-center">
						<Star size={20} />
					</Link>
					My List
				</li>
			</ul>
		</div>
	);
};
