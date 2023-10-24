import { useContext } from 'react';

import { ThemeContext } from '@/components/organisms/ThemeProvider';

export default () => {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
};
