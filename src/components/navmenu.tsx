import { Home, Search, Star } from 'lucide-react';
import Link from 'next/link';

export const Navmenu = () => {
	return (
		<div>
			<ul className="lg:hidden h-12 text-xs  border-t border-slate-400 bg-black text-primary fixed bottom-0 left-0 right-0 flex items-center justify-evenly opacity-90 ">
				<Link href={'/home'} className="flex items-center flex-col">
					<Home size={20} /> Home
				</Link>
				<Link href={'/search'} className="flex items-center flex-col">
					<Search size={20} /> Search
				</Link>
				<li>
					<Link href={'/mylist'} className="flex items-center flex-col">
						<Star size={20} />
						My List
					</Link>
				</li>
			</ul>
		</div>
	);
};
