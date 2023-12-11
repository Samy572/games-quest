import SearchList from '../../../src/components/searchlist';

interface listMap {
	data: never[];
	reset: () => void;
	className: string;
}

const DataListMap = ({ data, reset, className }: listMap) => {
	return (
		<div
			onMouseLeave={() => reset()}
			onClick={() => reset()}
			className={className}
		>
			{data && data.length > 0
				? data
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
									className={
										'flex items-center  py-2 hover:bg-black text-primary select-none px-3  '
									}
									key={id}
									id={id}
									name={name}
									background_image={background_image}
								/>
							)
						)
				: null}
		</div>
	);
};
export default DataListMap;
