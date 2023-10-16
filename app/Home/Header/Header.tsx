'use client';
import { Search, X } from 'lucide-react';
import { BurgerMenu } from '../Menu/BurgerMenu';
import { Label } from '../../../src/components/ui/label';
import { Input } from '../../../src/components/ui/input';
import { Logo } from '../../../src/components/Logo';
import { useContext } from 'react';
import SearchList from '../../../src/components/searchlist';
import Context from '@/context/Context';

export const Header = () => {
	const { inputValue, handleChange, dataSearchInput, resetInput } =
		useContext(Context);

	return (
		<header
			className="  w-full top-0 z-10  pt-5 flex items-center justify-around
     transition-all lg:justify-center   "
		>
			{' '}
			<Logo />
			<div className="input flex items-center relative">
				<Label
					htmlFor="search"
					className="  absolute left-0 bottom-2.5 px-2 text-sm text-black z-10 font-bold"
				>
					<Search size={16} />
				</Label>
				<Input
					id="search"
					className="  bg-slate-300 rounded-2xl text-black  px-7 w-32 sm:w-80 hover:bg-white lg:w-96 focus:bg-white   
        "
					type="text"
					placeholder="Search game"
					onChange={(e) => handleChange(e)}
					value={inputValue}
				/>
				{dataSearchInput.length > 0 && (
					<button
						type="button"
						onClick={() => resetInput()}
						className="absolute right-2 bottom-1.5 text-black"
					>
						<X />
					</button>
				)}
			</div>
			{dataSearchInput.length > 0 ? (
				<div
					onMouseLeave={() => resetInput()}
					className="flex flex-col z-30 absolute top-16	-10 right-auto border-2 w-full  sm:w-80  lg:w-96 border-slate-300 bg-slate-300 rounded-lg text-black  py-2 shadow-md"
				>
					{dataSearchInput
						.slice(0, 10)
						.map(
							({
								name,
								id,
								background_image,
							}: {
								name: string;
								id: number;
								background_image: string;
							}) => (
								<SearchList
									key={id}
									id={id}
									name={name}
									background_image={background_image}
								/>
							)
						)}
				</div>
			) : null}
			<BurgerMenu />
		</header>
	);
};
