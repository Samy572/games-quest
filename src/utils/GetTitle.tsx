export const title = (url: string) => {
	const year = [
		'2023',
		'2022',
		'2021',
		'2020',
		'2019',
		'2018',
		'2017',
		'2016',
	].find((y) => url.includes(y));
	return year ? `Popular Games in ${year}` : 'Popular Games in 2023';
};

