import clsx from 'clsx';
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
		<li
			className={clsx(
				className,
				(className = 'py-2 text-md  flex items-center  ')
			)}
		>
			<a href={path} className="inline-flex items-center transition-all">
				{Icon && (
					<div className="icon  mr-1 border rounded-full p-2 hover:bg-gray-200 hover:text-gray-950  ">
						{Icon && Icon}
					</div>
				)}
				{name}
			</a>
		</li>
	);
};
export default List;


