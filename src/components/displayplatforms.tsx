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
		<ul className="flex text-sm ">
			{platforms &&
				platforms
					.slice(0, 2)
					?.map(({ platform: { id, name } }) => (
						<List title={name} key={id} Icon={displayIcon(name, img)} />
					))}
		</ul>
	);
};
export default Displayplatforms;
