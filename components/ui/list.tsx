import clsx from 'clsx';
import Link from 'next/link';
const List = ({
	path,
	name,
	className,
	Icon,
}: {
	path: string;
	name: string;
	className?: string;
	Icon?: JSX.Element;
}) => {
	return (
		<li className={clsx(className, (className = 'py-2 text-md  flex  '))}>
			<Link
				href={path}
				className="text-gray-200 inline-flex items-center transition-all px-4 py-2 rounded-md hover:text-lime-300 hover:bg-neutral-800 "
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
