import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="bottom-0 w-full">
			<div className="dark:bg-base">
				<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
					<div className="sm:flex sm:items-center sm:justify-between">
						<Link to={'/'}>
							<h1 className="font-bold text-2xl lg:text-4xl text-center text-base-light dark:text-white duration-300 ease-in-out">
								Lan_discovery
								<span className="text-teal-600">.</span>
							</h1>
						</Link>
						<ul className="flex flex-wrap items-center justify-center my-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
							<li>
								<a href="#" className="mr-4 hover:underline md:mr-6 ">
									About
								</a>
							</li>
							<li>
								<a href="#" className="mr-4 hover:underline md:mr-6">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="mr-4 hover:underline md:mr-6 ">
									Licensing
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<span className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© {new Date().getFullYear() + ' '}
						<Link to={'/'} className="hover:underline">
							TheLandiscovery™
						</Link>
						. All Rights Reserved.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
