const SearchList = ({
	children,
	name,
}: {
	children?: React.ReactNode;
	name: string;
}) => {
	return (
		<div className=" p-[2px] hover:bg-white select-none px-3">
			{name}
			{children}
		</div>
	);
};
export default SearchList;
