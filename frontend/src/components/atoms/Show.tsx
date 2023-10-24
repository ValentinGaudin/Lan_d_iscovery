// import {
// 	useQuery,
// 	useMutation,
// 	useQueryClient,
// 	QueryClient,
// 	QueryClientProvider,
// } from '@tanstack/react-query';
// import * as Yup from 'yup';
// import { useParams } from 'react-router-dom';
// import React, { useState } from 'react';
// import CategoryCard from './CategoryCard';
// import { fetchPost } from '@/api/Posts/Posts';
// import Spinner from '../../../../frontend/app/components/atoms/Spinner';
// import { AiFillHeart } from 'react-icons/ai';
// import { BsVectorPen } from 'react-icons/bs';
// import { FaCommentDots } from 'react-icons/fa';
// import { RxCrossCircled } from 'react-icons/rx';
// import { useFormik } from 'formik';
// import { AxiosResponse } from 'axios';
// import { login } from '@/api/Base';
//
// const Show = () => {
// 	const { postId } = useParams();
// 	if (!postId) {
// 		throw new Error('No id provided');
// 	}
//
// 	const { data, isLoading, isSuccess, isError } = useQuery({
// 		queryKey: ['post', postId],
// 		queryFn: () => fetchPost(postId),
// 		enabled: Boolean(postId),
// 	});
//
// 	const toggleCommentInput = () => {
// 		const commentInput = document.querySelector('#comment-input');
// 		const commentButton = document.querySelector('#comment-button');
//
// 		commentInput?.classList.toggle('hidden');
// 		commentButton?.classList.toggle('hidden');
// 	};
//
// 	return (
// 		<section
// 			id="show"
// 			className="flex flex-row items-center justify-around h-full px-5 py-10 z-30"
// 		>
// 			{!isLoading && !isError ? (
// 				<>
// 					<div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
// 						<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
// 							<img
// 								src="https://source.unsplash.com/random/480x360"
// 								alt=""
// 								className="w-full h-60 sm:h-96 bg-gray-500"
// 							/>
// 							<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
// 								<div className="space-y-2">
// 									<p className="inline-block text-2xl font-semibold sm:text-3xl">
// 										{data?.title}
// 									</p>
// 									<div className="flex flex-wrap py-4">
// 										<div className=" inline-block mr-2">
// 											<div className="flex pr-2 h-full items-center">
// 												{data?.categories.map((category) => (
// 													<CategoryCard category={category} key={category.id} />
// 												))}
// 											</div>
// 										</div>
// 									</div>
// 									<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600">
// 										<div className="flex items-center md:space-x-2">
// 											<img
// 												src="https://source.unsplash.com/75x75/?portrait"
// 												alt=""
// 												className="w-4 h-4 border rounded-full bg-gray-500 border-gray-300"
// 											/>
// 											<p className="text-sm">
// 												{data?.author.full_name} • {data?.created_at}
// 											</p>
// 										</div>
// 										<p className="flex-shrink-0 mt-3 text-sm md:mt-0">
// 											4 min read • 1,570 views
// 										</p>
// 									</div>
// 								</div>
// 								<div className="text-gray-800">
// 									<p
// 										dangerouslySetInnerHTML={{
// 											__html: data?.description,
// 										}}
// 									></p>
// 								</div>
// 							</div>
// 						</div>
//
// 						<div className="group z-10">
// 							<div
// 								id="speed-dial"
// 								className="flex flex-col hidden justify-end py-1 mb-4 space-y-2 bg-white border border-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600"
// 							>
// 								<div className="text-sm text-gray-500 dark:text-gray-300">
// 									<ul className="text-sm text-gray-500 dark:text-gray-300">
// 										<li className="cursor-pointer">
// 											<a
// 												href="#"
// 												className="flex items-center px-5 py-2 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white dark:border-gray-600"
// 											>
// 												<AiFillHeart />
// 												<span className="text-sm font-medium">J'aime</span>
// 											</a>
// 										</li>
// 										<li className="cursor-pointer">
// 											<p
// 												id="comment-button"
// 												onClick={toggleCommentInput}
// 												className="flex items-center px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white"
// 											>
// 												<FaCommentDots />
// 												<span className="text-sm font-medium">Add comment</span>
// 											</p>
// 										</li>
// 									</ul>
//
// 									<div
// 										id="comment-input"
// 										className="flex hidden items-center px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white"
// 									>
// 										<label className="text-sm font-medium" htmlFor="comment">
// 											Ajouter un commentaire
// 										</label>
// 										<input
// 											type="text"
// 											name="comment"
// 											id="comment"
// 											className="w-full px-2 py-1 ml-2 text-sm text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:bg-gray-600"
// 										/>
//
// 										<RxCrossCircled
// 											size="2em"
// 											onClick={toggleCommentInput}
// 											className="cursor-pointer pl-2"
// 										/>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</>
// 			) : (
// 				<Spinner />
// 			)}
// 		</section>
// 	);
// };
//
// export default Show;
