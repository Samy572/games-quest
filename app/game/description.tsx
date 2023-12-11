'use client';
import { Button } from '@/src/components/ui/button';
import { GameCardType } from '@/src/types/game';
import { useState } from 'react';

const Description = ({
	selectedGameData,
}: {
	selectedGameData: GameCardType;
}) => {
	const [isShowMore, setIsShowMore] = useState(false);

	return (
		<div className=" py-5 t">
			{isShowMore === false && selectedGameData.description_raw.length > 200 ? (
				<p>
					{selectedGameData.description_raw.split('').slice(0, 200).join('')}
					...
				</p>
			) : (
				<p>{selectedGameData.description_raw} </p>
			)}
			{isShowMore ? (
				<Button
					variant={'outline'}
					className="mt-5"
					onClick={() => setIsShowMore(!isShowMore)}
				>
					show less
				</Button>
			) : (
				selectedGameData.description_raw.length > 200 && (
					<Button
						variant={'outline'}
						className="mt-5"
						onClick={() => setIsShowMore(!isShowMore)}
					>
						show more
					</Button>
				)
			)}
		</div>
	);
};
export default Description;
