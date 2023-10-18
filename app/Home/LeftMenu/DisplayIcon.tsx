import Image from 'next/image';

export const displayIcon = (name: string) => {
	switch (name) {
		case 'PC':
			return (
				<Image
					src="img/microsoft.svg"
					alt="pc"
					width={18}
					height={18}
					priority={false}
					className="p-0"
				/>
			);
		case 'PlayStation':
		case 'PlayStation 5':
		case 'PlayStation 4':
			return (
				<Image src="img/ps5.svg" alt="playstation" width={18} height={18} />
			);
		case 'Xbox':
		case 'Xbox Series S/X':
			return <Image src="img/xbox.svg" alt="xbox" width={18} height={18} />;

		case 'MacOS':
		case 'iOS':
			return <Image src="img/mac.svg" alt="mac os" width={18} height={18} />;
		case 'Nitendo Switch':
			return (
				<Image
					src="img/switch.svg"
					alt="nitendo-switch"
					width={18}
					height={18}
				/>
			);
		case 'Wii U':
		case 'Game Boy Advance':
		case 'Game Boy Color':
			return (
				<Image src="img/nitendo.svg" alt="nitendo" width={18} height={18} />
			);

		case 'SEGA':
			return <Image src="img/SEGA.svg" alt="SEGA" width={18} height={18} />;
	}
};
