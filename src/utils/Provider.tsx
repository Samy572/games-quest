'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '../components/theme-provider';
function Provider({ children }: { children: React.ReactNode }) {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default Provider;
