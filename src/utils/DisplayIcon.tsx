import Image from 'next/image';

export const displayIcon = (name: string, imgPath: string) => {
	switch (name) {
		case 'PC':
			return (
				<Image
					src={`${imgPath}/microsoft.svg`}
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
				<Image
					src={`${imgPath}/ps5.svg`}
					alt="playstation"
					width={18}
					height={18}
				/>
			);
		case 'Xbox':
		case 'Xbox Series S/X':
		case 'Xbox One':
			return (
				<Image src={`${imgPath}/xbox.svg`} alt="xbox" width={18} height={18} />
			);

		case 'macOS':
		case 'iOS':
			return (
				<Image src={`${imgPath}/mac.svg`} alt="mac os" width={18} height={18} />
			);
		case 'Nintendo Switch':
			return (
				<Image
					src={`${imgPath}/switch.svg`}
					alt="nintendo-switch"
					width={18}
					height={18}
				/>
			);
		case 'Wii U':
		case 'Game Boy Advance':
		case 'Game Boy Color':
			return (
				<Image
					src={`${imgPath}/nitendo.svg`}
					alt="nitendo"
					width={18}
					height={18}
				/>
			);

		case 'SEGA':
			return (
				<Image src={`${imgPath}/SEGA.svg`} alt="SEGA" width={18} height={18} />
			);

		case 'GameCube':
			return (
				<Image
					src={`${imgPath}/gamecube.svg`}
					alt="GameCube"
					width={18}
					height={18}
				/>
			);
	}
};
