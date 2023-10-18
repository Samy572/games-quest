type titleProps = {
	title: string;
};
const Title = ({ title }: titleProps) => {
	return (
		<div className="w-full flex justify-center sm:flex lg:justify-start ">
			<h2 className="  text-4xl font-semibold md:ml-14 ml-0">{title}</h2>
		</div>
	);
};
export default Title;
