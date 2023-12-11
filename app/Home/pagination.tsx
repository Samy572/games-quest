import { Button } from '@/src/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';

type Props = {
	pageIndex: number;
	setPageIndex: (num: number) => void;
};
const Pagination = ({ pageIndex, setPageIndex }: Props) => {
	const handlePageClick = (num: number) => {
		const newCount = pageIndex + num;
		if (newCount >= 1 && newCount <= 5) setPageIndex(newCount);
	};

	const isPageActive = (num: number) => {
		return pageIndex === num + 1;
	};

	return (
		<div className="my-10 md:mt-12 w-full flex justify-center gap-2">
			<Button
				className="hover:bg-primary hover:text-white"
				variant={'outline'}
				onClick={() => handlePageClick(-1)}
				aria-label="previous"
				disabled={pageIndex === 1}
				tabIndex={0}
			>
				<ChevronLeft />
			</Button>
			{Array.from({ length: 5 }, (_, i) => (
				<Button
					key={i}
					onClick={() => setPageIndex(i + 1)}
					className={clsx(
						isPageActive(i)
							? 'text-white bg-primary dark:bg-[#262626] dark:text-primary '
							: ' dark:bg-[#121212] text-#262626 bg-white] hover:bg-primary hover:text-white',
						'  transition-all  '
					)}
				>
					{i + 1}
				</Button>
			))}
			<Button
				variant={'outline'}
				className="hover:bg-primary hover:text-white"
				onClick={() => handlePageClick(+1)}
				aria-label="next"
				disabled={pageIndex === 5}
				tabIndex={0}
			>
				<ChevronRight />
			</Button>
		</div>
	);
};
export default Pagination;
