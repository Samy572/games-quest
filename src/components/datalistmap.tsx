import SearchList from './searchlist';

interface listMap {
	data: never[];
	reset: () => void;
}

const DataListMap = ({ data, reset }: listMap) => {
	return (
		<div
			onMouseLeave={() => reset()}
			className="flex flex-col z-30 absolute top-10	border-2 w-full  sm:w-80  lg:w-96 border-slate-300 bg-slate-300 rounded-lg text-black  py-2 shadow-md"
		>
			{data
				.slice(0, 10)
				?.map(
					({
						name,
						id,
						background_image,
					}: {
						name: string;
						id: number;
						background_image: string;
					}) => (
						<SearchList
							onClick={() => reset()}
							className={
								'flex items-center p-[2px] py-2 hover:bg-white select-none px-3 '
							}
							key={id}
							id={id}
							name={name}
							background_image={background_image}
						/>
					)
				)}
		</div>
	);
};
export default DataListMap;
