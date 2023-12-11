import Image from 'next/image';

const Favoris = ({
	onClick,
	img,
	description,
}: {
	onClick: () => void;
	img: string;
	description: string;
}) => {
	return (
		<button
			onClick={onClick}
			className="flex items-center hover:underline cursor-pointer"
		>
			<span className="text-lg mr-2 ">{description}</span>
			<Image src={img} alt="Add to favoris" width={20} height={20} />
		</button>
	);
};
export default Favoris;
