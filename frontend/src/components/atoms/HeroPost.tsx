import React from 'react';

import { PostCard } from '@/components/atoms';

import { Post } from '@/types/Post';

type Props = {
	post: Post;
};

const HeroPost = ({ post }: Props) => {
	return (
		<article className="flex items-center col-start-2 col-end-5 col-span-3 row-start-3 row-end-5 row-span-3">
			<PostCard post={post} />
		</article>
	);
};

export default HeroPost;
