'use client';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const FetchContent = () => {
	const APIKEY = '22dc8451931443c6bc3fbc279f7a8c7b';
	const [data, setData] = useState([]);
	// const url = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2023-01-01,2023-12-31&ordering=-added`;
	// `https://api.rawg.io/api/games?key=${APIKEY}&dates=2022-01-01,2022-12-31&ordering=-added`;

	// useEffect(() => {
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data.results));
	// }, [url]);

	console.log(data);

	return (
		<div className="grid border-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{data.map(({ name, background_image, genres, id }) => (
				<Card key={id}>
					<CardHeader>
						<CardTitle>{name}</CardTitle>
						<CardDescription>
							<Image
								src={background_image}
								alt={name}
								width={200}
								height={200}
								objectFit="cover"
								loading="lazy"
								layout="responsive"
							/>
						</CardDescription>
					</CardHeader>
				</Card>
			))}
		</div>
	);
};
export default FetchContent;
