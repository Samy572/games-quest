import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'flex h-9 w-full rounded-md px-3 py-1 text-sm shadow-sm transition-colors focus:outline-none   file:text-sm  file:font-medium   disabled:cursor-not-allowed focus:ring-2-primary  focus:outline-primary',
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = 'Input';

export { Input };
