export const title = (url: string) => {
	switch (true) {
		case url.includes('2023'):
			return 'Top of the year.';
		case url.includes('2022'):
			return 'Popular in 2022.';
		case url.includes('2021'):
			return 'Popular in 2021.';
		case url.includes('2020'):
			return 'Popular in 2020.';
		case url.includes('2019'):
			return 'Popular in 2019.';
		case url.includes('2018'):
			return 'Popular in 2018.';
		case url.includes('2017'):
			return 'Popular in 2017.';
		case url.includes('2016'):
			return 'Popular in 2016.';
		default:
			return 'Top of the year';
	}
};
