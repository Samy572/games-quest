import clsx from 'clsx';
import { GameCardType } from '../types/game';

const Rating = ({ selectedGameData }: { selectedGameData: GameCardType }) => {
	const ariaValueNow = Number((selectedGameData.rating * 20).toFixed(0));
	const conicGradientStyle = {
		background: `radial-gradient(closest-side, #353535 75% , transparent 80% 0%),
		conic-gradient(rgb(250, 204, 21) ${ariaValueNow + '%'}, #575757 0% 100% )`,
		
	};

	return (
		<div
			title={`Meta score: ${ariaValueNow} / 100%`}
			className={clsx(
				'progress-bar w-14 h-14  rounded-full flex justify-center items-center primary relative overflow-hidden'
			)}
			role="progressbar"
			aria-valuenow={ariaValueNow}
			aria-valuemin={0}
			aria-valuemax={100}
			style={conicGradientStyle}
		>
			<div className="relative z-10 p-5 font-bold">
				<span>{ariaValueNow}</span>
			</div>
		</div>
	);
};

export default Rating;
