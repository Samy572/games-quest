import { clsx } from 'clsx';
import { Swords } from 'lucide-react';
import Link from 'next/link';

export const Logo = ({ className }: { className?: string }) => {
	return (
		<div className={className}>
			<h1
				className={clsx(
					'font-montserrat text-3xl font-bold text-primary select-none -tracking-tighter lg:absolute lg:pl-10 lg:left-0 top-5	lg:text-4xl '
				)}
			>
				<Link className="min-w-fit tracking-wider" href={'/home'}>
					G<Swords size={20} className="inline " />
					me Quest
				</Link>
			</h1>
		</div>
	);
};
