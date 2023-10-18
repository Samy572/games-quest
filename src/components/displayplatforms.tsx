import { displayIcon } from '@/utils/DisplayIcon';
import List from './ui/list';

interface PlatformType {
	platform: {
		name: string;
		id: number;
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
		<div className="flex ">
			{platforms.slice(0, 3).map(({ platform: { id, name } }) => (
				<List key={id} Icon={displayIcon(name, img)} platform={true} />
			))}
		</div>
	);
};
export default Displayplatforms;
