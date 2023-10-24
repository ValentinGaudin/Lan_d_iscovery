import React from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { Posts, Home, Road } from '@/pages';

import { WhoIAm } from '@/components/atoms';
import App from '@/App';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />}>
			<Route element={<Home />} path={'/'} />
			<Route element={<Posts />} path={'/posts'} />
			<Route element={<WhoIAm />} path={'/whoiam'} />
			<Route element={<Road />} path={'/road'} />
			{/*<Route element={<Show />} path="posts/:postId" />*/}
		</Route>
	)
);
const MainRoot = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default MainRoot;
