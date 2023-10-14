type titleProps = {
	title: string;
};
const Title = ({ title }: titleProps) => {
	return (
		<div className="relative">
			<h2 className="text-4xl font-semibold font-monstserrat  lg:left-[360px]  absolute left-5 top-10 select-none">
				{title}
			</h2>
		</div>
	);
};
export default Title;
