import { LeftMenu } from './LeftMenu/letfmenu';
import { FetchContent } from './fetchcontent';

export const GamesOfTheYear = () => {
	return (
		<div className="container ">
			<LeftMenu />
			<main>
				<FetchContent />
			</main>
		</div>
	);
};
