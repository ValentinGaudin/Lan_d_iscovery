import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Spinner, HeroPost, NormalPost } from '@/components/atoms';

import { fetchPosts } from '@/api/Posts/Posts';

const Posts = () => {
	const { isLoading, data } = useQuery({
		queryKey: ['posts'],
		queryFn: () => fetchPosts(),
	});

	const shuffledData = useMemo(() => {
		return data && [...data].sort(() => Math.random() - 0.5);
	}, [data]);

	if (isLoading) return <Spinner />;

	return (
		<section className="dark:text-gray-100" id="post">
			<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
				<div className="grid grid-cols-5 grid-rows-6">
					{shuffledData && shuffledData.length > 0 ? (
						shuffledData.map((post, index) =>
							post.is_featured ? (
								<HeroPost post={post} key={post.id} />
							) : (
								<NormalPost
									post={post}
									key={post.id}
									delay={(index + 1) * 150}
								/>
							)
						)
					) : (
						<Spinner />
					)}
				</div>
			</div>
		</section>
	);
};
export default Posts;
