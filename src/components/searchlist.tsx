import Image from 'next/image';
import Link from 'next/link';

const SearchList = ({
	name,
	children,
	background_image,
	id,
}: {
	children?: React.ReactNode;
	name: string;
	background_image?: string;
	id: number;
}) => {
	return (
		<div className="flex items-center p-[2px] py-2 hover:bg-white select-none px-3">
			{background_image && (
				<div>
					<Image
						className="mr-2"
						src={background_image}
						alt={name}
						width={50}
						height={50}
					/>
				</div>
			)}
			<Link href={`/game/${id}`}>
				<p>{name}</p>
			</Link>
			<div>{children}</div>
		</div>
	);
};
export default SearchList;
