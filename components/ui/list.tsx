import clsx from 'clsx';
const List = ({
	name,
	className,
	Icon,
	onClick,
}: {
	name: string;
	className?: string;
	Icon?: JSX.Element;
	onClick?: () => void;
}) => {
	return (
		<li
			onClick={onClick}
			className={clsx(className, (className = 'py-2 text-md  flex  '))}
		>
			<p className="text-gray-200 inline-flex items-center transition-all px-4 py-2 rounded-md hover:text-lime-300 hover:bg-neutral-800 active:bg-neutral-800">
				{Icon && (
					<span className="icon  mr-2 border rounded-full p-2 bg-white text-black ">
						{Icon && Icon}
					</span>
				)}
				{name}
			</p>
		</li>
	);
};
export default List;
