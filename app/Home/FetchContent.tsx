'use client';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { useEffect, useState } from 'react';

const FetchContent = () => {
	const APIKEY = '22dc8451931443c6bc3fbc279f7a8c7b';
	const [data, setData] = useState([]);
	const url = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2023-01-01,2023-12-31&ordering=-added`;
	`https://api.rawg.io/api/games?key=${APIKEY}&dates=2022-01-01,2022-12-31&ordering=-added`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data.results));
	}, [url]);

	console.log(data);

	return (
		<div className="w-full grid md:grid-cols-2 lg:grid-cols-3 items-center place-items-center gap-2 grid-cols-1 px-5 pt-10">
			{data.map(({ name, background_image, genres, id }) => (
				<Card key={id} className="bg-stone-900 border-stone-700">
					<CardHeader>
						<img src={background_image} alt={name} loading="lazy" />
						<CardTitle className="text-3xl text-gray-100 ">
							<h2 className="overflow-hidden truncate whitespace-nowrap xl:w-[250px] w-[250px]">
								{name}
							</h2>
						</CardTitle>
						<CardDescription>
							<h3 className="text-xl text-gray-200 ">
								<strong>Genres:</strong>
							</h3>
							{genres.slice(0, 2).map((genre) => (
								<ul key={genre.name}>
									<li className="border-b-slate-400">{genre.name}</li>
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
