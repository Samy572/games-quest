import Context from '@/context/Context';
import { Button } from '@/src/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useContext } from 'react';
import { clsx } from 'clsx';

const Pagination = () => {
	const { count, setCount } = useContext(Context);

	const handlePageClick = (num: number) => {
		const newCount = count + num;
		if (newCount >= 1 && newCount <= 5) setCount(newCount);
	};

	const isActive = (num: number) => {
		return count === num + 1;
	};

	return (
		<div className="my-10 md:mt-12 w-full flex justify-center gap-2">
			<Button onClick={() => handlePageClick(-1)}>
				<ChevronLeft className="text-lime-300" />
			</Button>
			{Array.from({ length: 5 }, (_, i) => (
				<Button
					key={i}
					onClick={() => setCount(i + 1)}
					className={clsx(
						isActive(i) ? '  bg-lime-800' : '',
						'border border-transparent transition-all hover:border-lime-300 '
					)}
				>
					{i + 1}
				</Button>
			))}
			<Button onClick={() => handlePageClick(+1)}>
				<ChevronRight className="text-lime-300" />
			</Button>
		</div>
	);
};
export default Pagination;
