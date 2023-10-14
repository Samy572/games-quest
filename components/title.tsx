type titleProps = {
	title: string;
};
const Title = ({ title }: titleProps) => {
	return (
		<div className="relative">
			<h2 className="text-4xl font-semibold font-monstserrat md:absolute md:left-[350px]  absolute left-2 top-10">
				{title}
			</h2>
		</div>
	);
};
export default Title;
