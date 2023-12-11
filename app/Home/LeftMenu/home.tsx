import Link from "next/link";

const Home = () => {
	return (
		<ul>
			<h2 className="text-2xl pb-14">
				<Link href={'/home'}>
					<strong>Home</strong>
				</Link>
			</h2>
		</ul>
	);
};
export default Home;
