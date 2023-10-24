import React from 'react';

import { NavigationLink, ToggleTheme } from '@/components/atoms';
import { Link } from 'react-router-dom';

const Nav = () => {
	// const { isConnected, setCurrentUser, currentUser } = useAuth();

	// const handleDisconnectForm = async () => {
	// 	await logout().then(() => {
	// 		localStorage.removeItem('token');
	// 		localStorage.removeItem('user');
	// 		setIsConnected(false);
	// 	});
	// };
	// const handleLoginClick = () => {
	// 	showLoginForm ? setShowLoginForm(false) : setShowLoginForm(true);
	// };

	// const formik = useFormik({
	// 	initialValues: {
	// 		search: '',
	// 	},
	// 	validationSchema: Yup.object({
	// 		search: Yup.string().min(3),
	// 	}),
	// 	validateOnChange: true,
	// 	onSubmit: (values) => {
	// 		setIsLoading(true);
	// 		if (values.search.length === 0) {
	// 			setIsLoading(false);
	// 			setSearch([]);
	// 		}
	// 		searchPosts(values.search).then((response) => {
	// 			setSearch(response);
	// 			setIsLoading(false);
	// 		});
	// 	},
	// });

	// const randomText = (): string => {
	// 	return Math.random().toString(36).slice(2, 7);
	// };

	return (
		<>
			<header
				data-show="navigation"
				id="nav"
				className="flex items-center justify-between p-3"
			>
				<div className="flex">
					<Link to={'/'} className="group">
						<h1 className="font-bold text-4xl text-center lg:hidden text-base-light dark:text-white duration-300 ease-in-out hover:underline hover:underline-offset-4 transform transition-all">
							Lan_discovery
							<span className="text-teal-600">.</span>
						</h1>
						<h1 className="hidden lg:block font-bold text-sm md:text-xl text-center text-gray-800 dark:text-white hover:underline hover:underline-offset-4 transform transition-all ease-in-out duration-700">
							The Land discovery
							<span className="text-primary">.</span>
						</h1>
					</Link>
					{/*<div id="profile" className="space-y-10">*/}
					{/*	{isConnected ? (*/}
					{/*		<NavLink to={'/me'}>*/}
					{/*			<img*/}
					{/*				src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"*/}
					{/*				alt="Avatar user"*/}
					{/*				className="w-10 md:w-16 rounded-full mx-auto space-y-3 ring-2 ring-amber-500"*/}
					{/*			/>*/}
					{/*			<div>*/}
					{/*				<h2 className="font-medium text-xs md:text-sm text-center text-amber-500">*/}
					{/*					{currentUser?.full_name}*/}
					{/*				</h2>*/}
					{/*			</div>*/}
					{/*		</NavLink>*/}
					{/*	) : (*/}
					{/*		<img*/}
					{/*			src={`https://robohash.org/${randomText}.png`}*/}
					{/*			alt="placeholder"*/}
					{/*			className="w-10 md:w-16 rounded-full mx-auto space-y-3 ring-2 ring-amber-500"*/}
					{/*		/>*/}
					{/*	)}*/}
					{/*</div>*/}
				</div>

				<div className="flex justify-center h-full items-center flex-1 space-x-10">
					<div id="menu" className="flex space-x-4">
						<NavigationLink title={'Articles'} path={'posts'} />
						{/*	<NavigationLink titl?e={'Qui sommes-nous ?'} path={'whoiam'} />*/}
						{/*	<NavigationLink title={'Carte'} path={'road'} />*/}
					</div>

					{/*<div className="flex border border-solid border-black-200 dark:border-gray-300 rounded-lg focus-within:ring-2 ring-amber-500">*/}
					{/*<Form*/}
					{/*	id="search-form"*/}
					{/*	role="search"*/}
					{/*	className="flex w-full"*/}
					{/*	onKeyUp={(e: React.KeyboardEvent<HTMLFormElement>) => {*/}
					{/*		formik.handleSubmit(e);*/}
					{/*	}}*/}
					{/*>*/}
					{/*	<input*/}
					{/*		type="search"*/}
					{/*		className="w-full rounded-lg md:rounded-none md:rounded-tl-md md:rounded-bl-md px-2 py-3 text-sm text-gray-50 dark:text-gray-600 focus:outline-none bg-white dark:bg-white"*/}
					{/*		placeholder="Recherche"*/}
					{/*		aria-label="Search posts"*/}
					{/*		name="search"*/}
					{/*		onChange={formik.handleChange}*/}
					{/*		value={formik.values.search}*/}
					{/*	/>*/}
					{/*	<button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block bg-white dark:bg-white">*/}
					{/*		<svg*/}
					{/*			className="w-4 h-4 fill-gray-600"*/}
					{/*			fill="currentColor"*/}
					{/*			viewBox="0 0 20 20"*/}
					{/*			xmlns="http://www.w3.org/2000/svg"*/}
					{/*		>*/}
					{/*			<path*/}
					{/*				fillRule="evenodd"*/}
					{/*				d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"*/}
					{/*				clipRule="evenodd"*/}
					{/*			></path>*/}
					{/*		</svg>*/}
					{/*	</button>*/}
					{/*</Form>*/}
					{/*</div>*/}

					{/*{formik.touched.search && formik.errors.search ? (*/}
					{/*	<div className="flex items-center">*/}
					{/*		<span className="text-red-500 text-xs italic">*/}
					{/*			{formik.errors.search}*/}
					{/*		</span>*/}
					{/*	</div>*/}
					{/*) : null}*/}
					{/*<div className="mx-auto">*/}
					{/*	{!isConnected ? (*/}
					{/*		<button*/}
					{/*			onClick={handleLoginClick}*/}
					{/*			className="bg-tertiary dark:bg-secondary text-base dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-amber-500 transition duration-500 ease-in-out"*/}
					{/*		>*/}
					{/*			Connexion*/}
					{/*		</button>*/}
					{/*	) : (*/}
					{/*		<button*/}
					{/*			className="text-white bg-secondary dark:bg-tertiary rounded-lg hover:bg-red-400 shadow-lg shadow-gray-200 dark:shadow-gray-900 duration-300"*/}
					{/*			onClick={handleDisconnectForm}*/}
					{/*		>*/}
					{/*			Déconnexion*/}
					{/*		</button>*/}
					{/*	)}*/}
					{/*</div>*/}
				</div>
				<ToggleTheme />
			</header>
			{/*{showLoginForm && !isConnected && (*/}
			{/*	<HomeForm*/}
			{/*		showLoginForm={showLoginForm}*/}
			{/*		setShowLoginForm={setShowLoginForm}*/}
			{/*	/>*/}
			{/*)}*/}
		</>
	);
};

export default Nav;
