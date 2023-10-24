import React from 'react';

import { Post } from '@/types/Post';

type Props = {
	post: Post;
};

const PostCard = ({ post }: Props) => {
	return (
		<>
			<div className="flex relative justify-center w-full h-full bg-cover bg-center items-center group">
				<img
					role="presentation"
					className="rounded-lg group-hover:scale-95 transition duration-50 group-hover:blur w-full h-4/5 group-hover:shadow-base-500/50 group-hover:dark:shadow-quaternary shadow-2xl"
					src="https://source.unsplash.com/random/480x360?1"
					alt=""
				/>
				<div className="absolute mx-auto text-left text-white">
					<h1 className="group-hover:block hidden text-5xl mb-6 font-medium text-base dark:text-white mix-blend-darken dark:mix-blend-lighten">
						{post.title} {post.id}
					</h1>
					{/*<p className="group-hover:block hidden text-xl mb-12 text-base dark:text-white mix-blend-darken">*/}
					{/*	{post.description}*/}
					{/*</p>*/}
				</div>
			</div>
			<div className="flex-col justify-around w-1/2 p-6 space-y-2 hidden peer-hover:flex peer-hover:grow peer-hover:transition-all peer-hover:ease-in peer-hover:duration-500">
				<span>{post.created_at}</span>
				<span>2.1K views</span>
			</div>
		</>
	);
};

export default PostCard;
