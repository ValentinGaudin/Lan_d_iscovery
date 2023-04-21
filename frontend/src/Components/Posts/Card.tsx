import React, {useEffect, useState} from 'react';
import {Post} from "../../@types/Post";
import {Link} from "react-router-dom";
import slugify from 'react-slugify';

type Props = {
	post: Post;
}


const Card = ({ post } : Props) => {
	const [postTitleSlug, setPostTitleSlug] = useState<string>('');
	const getRandomInt = () => {
		return Math.floor(Math.random() * 500);
	}

	useEffect(() => {
		setPostTitleSlug(slugify(post.title, { delimiter: '_' }))
	}, [postTitleSlug])


	return (
		<>
			{/*//TODO FIX THIS*/}
			<span className={`hidden content-['${postTitleSlug}'] before:content-['${postTitleSlug}']`}>
				${postTitleSlug}
			</span>
			<Link to={`/posts/${post.id}`} className="cursor-pointer z-10">
				<article className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
					<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1"  alt=""/>
					<div className="p-6 space-y-2">
						<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
							{post.title}
						</h3>
						<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
							<span>{post.created_at}</span>
							<span>2.1K views</span>
						</div>
						{/*//TODO FIX THIS*/}
						{/*<p>{post.description}</p>*/}
					</div>
				</article>
			</Link>
		</>
    );
};

export default Card;