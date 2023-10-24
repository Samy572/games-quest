'use client';
import Context from '@/context/Context';
import { Input } from '@/src/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import DataListMap from '@/app/Home/Header/datalistmap';
import { useContext } from 'react';

function Page() {
	const { handleChange, dataSearchInput, resetInput } = useContext(Context);
	return (
		<div className="relative ">
			<div className="contain flex h-12 justify-center items-center gap-1">
				<Link onClick={() => resetInput()} href={'/home'}>
					<ArrowLeft size={20} />
				</Link>
				<Input
					className="rounded-xl h-7   w-80"
					placeholder="Search games"
					autoFocus
					onChange={(e) => handleChange(e)}
				/>
			</div>

			{dataSearchInput.length > 0 ? (
				<DataListMap
					data={dataSearchInput}
					reset={resetInput}
					className={
						'flex flex-col z-30  w-full mx-auto  rounded-lg text-primary    shadow-md'
					}
				/>
			) : null}
		</div>
	);
}
export default Page;

//
