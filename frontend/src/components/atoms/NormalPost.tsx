import React, { useEffect, useMemo, useState } from 'react';

import { Link } from 'react-router-dom';

import { PostCard } from '@/components/atoms';

import { Post } from '@/types/Post';

type Props = {
	post: Post;
	delay?: number;
};

const NormalPost = ({ post, delay = 0 }: Props) => {
	const [animationStarted, setAnimationStarted] = useState(false);

	const getRandomPositionClass = (): string => {
		const randomCol = Math.floor(Math.random() * 6) + 1; // Choisit un nombre aléatoire de 1 à 6 pour les colonnes
		const randomRow = Math.floor(Math.random() * 6) + 1; // Choisit un nombre aléatoire de 1 à 6 pour les lignes

		// Vérifier si les coordonnées sont dans le centre
		if (randomCol >= 2 && randomCol <= 4 && randomRow >= 2 && randomRow <= 4) {
			// Si oui, recalculer les coordonnées
			return getRandomPositionClass();
		}

		return `col-start-${randomCol} row-start-${randomRow}`;
	};

	const randomPositionClass = useMemo(() => getRandomPositionClass(), []);

	useEffect(() => {
		setTimeout(() => {
			setAnimationStarted(true);
		}, delay);
	}, []);

	return (
		<article
			className={`
        flex items-center justify-center p-2 cols-span-2 transition-all ease-out duration-500
        ${randomPositionClass}
      ${animationStarted ? 'transform translate' : ''}`}
		>
			<Link to={`/${post.slug}`} className="cursor-pointer z-10">
				<div>
					<PostCard post={post} />
				</div>
			</Link>
		</article>
	);
};

export default NormalPost;
