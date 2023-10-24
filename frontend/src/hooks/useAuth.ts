import { useContext } from 'react';
import { AuthContext } from '../components/organisms/AuthProvider';

export default () => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error('useAuth must be used within a AuthProvider');
	}

	return context;
};
