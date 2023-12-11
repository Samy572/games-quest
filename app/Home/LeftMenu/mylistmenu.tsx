import List from "@/src/components/ui/list";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const MyListMenu = () => {
	return (
		<ul>
			<h2 className="text-xl pb-5 mt-5">
				<strong> My List</strong>{' '}
			</h2>
			<Link href={'/mylist'}>
				<List
					Icon={<Sparkles className="text-amber-500	" />}
					name="My favorites list"
				/>
			</Link>
		</ul>
	);
};
export default MyListMenu;
