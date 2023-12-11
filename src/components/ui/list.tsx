import clsx from 'clsx';
const List = ({
	name,
	className,
	Icon,
	onClick,
	active,
	title,
}: {
	name?: string;
	className?: string;
	Icon: JSX.Element | undefined;
	onClick?: () => void;
	active?: boolean;
	title?: string;
}) => {
	return (
		<li
			title={title}
			onClick={onClick}
			className={clsx(
				className,
				(className = 'py-2 text-md  flex cursor-pointer ')
			)}
		>
			<div
				className={clsx(
					' inline-flex items-center justify-between gap-2 transition-all px-4  py-2 rounded-md hover:text-primary hover:bg-neutral-800 active:bg-neutral-800',
					{ 'text-primary bg-neutral-800': active }
				)}
			>
				{Icon && (
					<div className="   border rounded-full p-2 bg-white text-black ">
						{Icon && Icon}
					</div>
				)}
				{name}
			</div>
		</li>
	);
};
export default List;
