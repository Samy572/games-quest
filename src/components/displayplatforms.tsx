import { displayIcon } from '@/src/utils/DisplayIcon';
import List from './ui/list';

interface PlatformType {
	platform: {
		name: string;
		id: number;
		className?: string;
	};
	img?: string;
}
const Displayplatforms = ({
	platforms,
	img,
}: {
	platforms: PlatformType[];
	img: string;
}) => {
	return (
		<div className="flex text-sm ">
			{platforms &&
				platforms
					.slice(0, 2)
					?.map(({ platform: { id, name } }) => (
						<List key={id} Icon={displayIcon(name, img)} name={name} />
					))}
		</div>
	);
};
export default Displayplatforms;
