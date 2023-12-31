'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from './button';

export function ModeToggle({ className }: { className: string }) {
	const { setTheme, theme } = useTheme();

	const switchTheme = (theme: string) => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	return (
		<div className={className}>
			<Button
				className="h-[20px] w-[20px]"
				size="icon"
				variant={'ghost'}
				aria-label="change theme"
				tabIndex={0}
			>
				<SunIcon
					onClick={() => switchTheme('light')}
					className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<MoonIcon
					onClick={() => switchTheme('dark')}
					className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
			</Button>
		</div>
	);
}
