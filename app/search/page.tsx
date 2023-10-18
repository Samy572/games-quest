'use client';
import { Input } from '@/src/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function Page() {
	return (
		<div>
			<div className="contain flex h-14 justify-center items-center gap-1">
				<Link href={'/home'}>
					<ArrowLeft size={20} />
				</Link>
				<Input
					className="rounded-xl h-7 bg-zinc-900  w-80"
					placeholder="Search games"
					autoFocus
				/>
			</div>
		</div>
	);
}
export default Page;
