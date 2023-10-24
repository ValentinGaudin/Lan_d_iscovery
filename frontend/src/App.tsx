import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { DefaultTemplate } from '@/components/templates';
import ThemeProvider from '@/components/organisms/ThemeProvider';
import AuthProvider from '@/components/organisms/AuthProvider';

const App = () => {
	const queryClient = new QueryClient();

	return (
		<main className="bg-white dark:bg-base">
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<AuthProvider>
						<DefaultTemplate></DefaultTemplate>
					</AuthProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</main>
	);
};

export default App;
