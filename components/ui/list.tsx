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
		<li className={clsx(className, (className = 'py-2 text-md  flex   '))}>
			<Link
				href={path}
				className="text-gray-400 inline-flex items-center transition-all  hover:text-gray-50 "
			>
				{Icon && (
					<div className="icon  mr-1 border rounded-full p-2  ">
						{Icon && Icon}
					</div>
				)}
				{name}
			</Link>
		</li>
	);
};
export default List;
