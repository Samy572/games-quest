import FetchContent from './FetchContent';
import { LeftMenu } from './LeftMenu/LeftMenu';

export const Home = () => {
	return (
		<div>
			<LeftMenu />
			<FetchContent />
		</div>
	);
};
