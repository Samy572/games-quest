import Image from 'next/image';
import Link from 'next/link';

const SearchList = ({
	name,
	children,
	background_image,
	id,
	className,
	onClick,
}: {
	children?: React.ReactNode;
	name: string;
	background_image?: string;
	id: number;
	className?: string;
	onClick?: () => void;
}) => {
	return (
		<Link onClick={onClick} href={`/game/${id}`}>
			<div className={className}>
				{background_image && (
					<div className="">
						<Image
							className="mr-2 pl-2 p-1"
							src={background_image}
							alt={name}
							width={50}
							height={50}
						/>
					</div>
				)}

				<p>{name}</p>

				<div>{children}</div>
			</div>
		</Link>
	);
};
export default SearchList;
