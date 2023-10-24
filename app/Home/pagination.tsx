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

	const isPageActive = (num: number) => {
		return count === num + 1;
	};

	return (
		<div className="my-10 md:mt-12 w-full flex justify-center gap-2">
			<Button onClick={() => handlePageClick(-1)}>
				<ChevronLeft className="" />
			</Button>
			{Array.from({ length: 5 }, (_, i) => (
				<Button
					key={i}
					onClick={() => setCount(i + 1)}
					className={clsx(
						isPageActive(i) ? 'bg-primary' : 'bg-white  border-primary',
						'border  transition-all  '
					)}
				>
					{i + 1}
				</Button>
			))}
			<Button onClick={() => handlePageClick(+1)}>
				<ChevronRight className="" />
			</Button>
		</div>
	);
};
export default Pagination;
