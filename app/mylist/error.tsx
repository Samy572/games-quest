'use client';

import { Button } from '@/src/components/ui/button';

export default function Custom404() {
	return (
		<div className="h-screen flex flex-col items-center justify-center gap-6">
			<h1 className="text-3xl text-center">404 - Page Not Found</h1>
			<Button
				onClick={() => (window.location.href = '/')}
				className="mt-5"
				variant="outline"
			>
				Back to Home
			</Button>
		</div>
	);
}
