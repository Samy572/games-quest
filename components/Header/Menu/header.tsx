import { Search } from 'lucide-react';
import { Logo } from './logo';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { BurgerMenu } from './burgerMenu';

const Header = () => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};

	return (
		<header
			className="  pt-5 flex items-center justify-around
     transition-all "
		>
			{' '}
			<Logo />
			<div className="input flex items-center relative">
				<Label
					htmlFor="search"
					className=" absolute left-0 bottom-2.5   px-1 text-sm   text-black z-10 font-bold"
				>
					<Search size={16} />
				</Label>
				<Input
					id="search"
					className="bg-slate-300 rounded-2xl text-black  px-6 w-32 sm:w-80 hover:bg-white
        "
					type="text"
					placeholder="Rechercher un jeu"
					onChange={handleChange}
				/>
			</div>
			<BurgerMenu />
		</header>
	);
};
export default Header;
