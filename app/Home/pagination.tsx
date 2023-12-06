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
			<Button variant={'outline'} onClick={() => handlePageClick(-1)}>
				<ChevronLeft />
			</Button>
			{Array.from({ length: 5 }, (_, i) => (
				<Button
					key={i}
					onClick={() => setCount(i + 1)}
					className={clsx(
						isPageActive(i)
							? 'text-white bg-primary dark:bg-[#262626] dark:text-primary '
							: ' dark:bg-[#121212] text-white bg-[#121212] ',
						'  transition-all  '
					)}
				>
					{i + 1}
				</Button>
			))}
			<Button variant={'outline'} onClick={() => handlePageClick(+1)}>
				<ChevronRight />
			</Button>
		</div>
	);
};
export default Pagination;
//121212
