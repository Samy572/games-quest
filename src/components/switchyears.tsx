import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

type Props = {
	onClickUp: () => void;
	onClickDown: () => void;
	className: string;
};

const SwitchYears = ({ onClickUp, onClickDown, className }: Props) => {
	return (
		<div className={className}>
			<Button onClick={onClickUp} className=" w-fit h-fit p-0">
				<ChevronUp size={16} />
			</Button>
			<Button onClick={onClickDown} className="  w-fit h-fit p-0 ">
				<ChevronDown size={16} />
			</Button>
		</div>
	);
};
export default SwitchYears;
