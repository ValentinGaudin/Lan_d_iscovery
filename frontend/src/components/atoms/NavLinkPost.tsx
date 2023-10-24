import React from 'react';

import { NavLink } from 'react-router-dom';

import { Post } from '@/types/Post';

type Props = {
	posts: Post[];
};

const NavLinkPost = ({ posts }: Props) => {
	return (
		<div>
			<ul>
				{posts.length > 0
					? posts.map((post) => (
							<li
								key={post.id}
								className="flex items-center text-sm font-medium text-gray-700 py-2 px-2 hover:bg-quaternary hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
							>
								{post ? (
									<NavLink to={`posts/${post.id}`}>
										<span className="w-6 h-6 fill-current inline-block">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="black dark:white"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
												/>
											</svg>
										</span>
										<span className="ml-4 text-gray-800 dark:text-white hover:text-white transition duration-500">
											{post.title}
										</span>
									</NavLink>
								) : (
									<i>Pas de post</i>
								)}
							</li>
					  ))
					: null}
			</ul>
		</div>
	);
};

export default NavLinkPost;
