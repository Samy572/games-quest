'use client';
import Context from '@/context/Context';
import SearchList from '../../src/components/searchlist';
import { Input } from '@/src/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';

function Page() {
	const { handleChange, dataSearchInput, resetInput, inputValue } =
		useContext(Context);
	return (
		<div className="relative bg-zinc-900">
			<div className="contain flex h-12 justify-center items-center gap-1">
				<Link href={'/home'}>
					<ArrowLeft size={20} />
				</Link>
				<Input
					className="rounded-xl h-7 bg-zinc-900  w-80"
					placeholder="Search games"
					autoFocus
					onChange={(e) => handleChange(e)}
				/>
			</div>

			{dataSearchInput.length > 0 ? (
				<div
					onClick={() => resetInput()}
					className="flex flex-col z-30  w-full mx-auto   bg-zinc-900 rounded-lg text-black    shadow-md"
				>
					{dataSearchInput.map(
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
								className=" flex items-center text-slate-300"
								key={id}
								id={id}
								name={name}
								background_image={background_image}
							/>
						)
					)}
				</div>
			) : null}
		</div>
	);
}
export default Page;
