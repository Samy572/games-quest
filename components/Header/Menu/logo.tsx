'use client';
import { clsx } from 'clsx';
import { Swords } from 'lucide-react';
import { ubuntu } from '@/app/layout';
export const Logo = () => {
	return (
		<div className="">
			<h1
				className={clsx(
					ubuntu.className,
					'text-lg text-lime-300 select-none -tracking-tighter	 '
				)}
			>
				G<Swords size={20} className="inline text-stone-300" />
				mes
			</h1>
		</div>
	);
};
