import FetchContent from './FetchContent';
import { LeftMenu } from './LeftMenu/LeftMenu';

export const Home = () => {
	return (
		<div className=" h-[calc(100vh-55.99px)] w-full grid lg:grid-cols-[320px_minmax(1024px,_1fr)_100px] grid-cols-1 pt-14 ">
			<LeftMenu />

			<FetchContent />
		</div>
	);
};
