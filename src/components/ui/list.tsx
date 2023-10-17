import clsx from 'clsx';
import Link from 'next/link';
const List = ({
	name,
	className,
	Icon,
	onClick,
	active,
	platform,
}: {
	name?: string;
	className?: string;
	Icon: JSX.Element | undefined;
	onClick?: () => void;
	active?: boolean;
	platform?: boolean;
}) => {
	return (
		<li
			onClick={onClick}
			className={clsx(
				className,
				(className = 'py-2 text-md  flex cursor-pointer ')
			)}
		>
			<Link
				href={'/'}
				className={clsx(
					'text-gray-200 inline-flex items-center transition-all px-4  py-2 rounded-md hover:text-lime-300 hover:bg-neutral-800 active:bg-neutral-800>',
					{ 'text-lime-300 bg-neutral-800': active },
					{ 'px-[0px]': platform }
				)}
			>
				{Icon && (
					<div className="icon  mr-2 border rounded-full p-2 bg-white text-black ">
						{Icon && Icon}
					</div>
				)}
				{name}
			</Link>
		</li>
	);
};
export default List;