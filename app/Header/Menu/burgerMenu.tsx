'use client';
import { Button } from '@/components/ui/button';
import Context from '@/context/Context';
import { Menu, X } from 'lucide-react';
import { useContext } from 'react';
export const BurgerMenu = () => {
	const { toggleMenu, toggleMenuHandler } = useContext(Context);

	return (
		<div className="cursor-pointer  lg:hidden flex  ">
			{toggleMenu === false ? (
				<Button
					onClick={() => toggleMenuHandler()}
					variant={'default'}
					aria-label="navigation"
					className="hover:bg-neutral-800 rounded-full "
				>
					<Menu />
				</Button>
			) : (
				<Button
					onClick={() => toggleMenuHandler()}
					variant={'default'}
					aria-label="navigation"
					className="hover:bg-neutral-800 rounded-full "
				>
					<X />
				</Button>
			)}
		</div>
	);
};
