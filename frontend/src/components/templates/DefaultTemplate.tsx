import React from 'react';

import { Nav } from '@/components/organisms';
import { Footer } from '@/components/atoms';
import { Outlet } from 'react-router-dom';

const DefaultTemplate = () => {
	return (
		<>
			<Nav />
			<div className="min-w-screen min-h-[calc(100vh-240px)]">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default DefaultTemplate;
