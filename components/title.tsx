type titleProps = {
	title: string;
};
const title = ({ title }: titleProps) => {
	return (
		<div>
			<h2 className="text-4xl font-semibold font-monstserrat">{title}</h2>
		</div>
	);
};
export default title;
