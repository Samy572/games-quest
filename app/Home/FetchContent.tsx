'use client';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Context from '@/context/Context';
import { useContext, useEffect, useState } from 'react';

const FetchContent = () => {
	const { url } = useContext(Context);

	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data.results));
	}, [url]);

	console.log(data);

	return (
		<div className="w-full grid md:grid-cols-2 lg:grid-cols-3 items-center place-items-center gap-2 grid-cols-1 px-5 pt-10 transition-all ">
			{data.map(({ name, background_image, genres, id }) => (
				<Card
					key={id}
					className="bg-stone-900 border-stone-700 transition-all hover:bg-stone-800 hover:scale-110 "
				>
					<CardHeader>
						<img src={background_image} alt={name} loading="lazy" />
						<CardTitle className="text-3xl text-gray-100 ">
							<h2
								className="font-roboto overflow-hidden truncate whitespace-nowrap xl:w-[250px] w-[250px]"
								title={name}
							>
								{name}
							</h2>
						</CardTitle>
						<CardDescription>
							<h3 className="text-xl text-gray-200 ">
								<strong>Genres:</strong>
							</h3>
							{genres.slice(0, 2).map((genre) => (
								<ul key={genre.name} className="space-y-6">
									<li>{genre.name}</li>
								</ul>
							))}
						</CardDescription>
					</CardHeader>
				</Card>
			))}
		</div>
	);
};
export default FetchContent;
