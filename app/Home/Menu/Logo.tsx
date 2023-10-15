import { clsx } from 'clsx';
import { Swords } from 'lucide-react';
export const Logo = () => {
	return (
		<div>
			<h1
				className={clsx(
					'font-montserrat text-3xl font-bold text-lime-300 select-none -tracking-tighter lg:absolute lg:pl-10 lg:left-0 top-5	lg:text-4xl '
				)}
			>
				G<Swords size={20} className="inline text-stone-300" />
				mes
			</h1>
		</div>
	);
};
