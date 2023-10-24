import React from 'react';
import { Category } from '@/types/Category';

type Props = {
	category: Category;
};
const CategoryCard = ({ category }: Props) => {
	return (
		<>
			<svg
				className="text-amber-600 w-6 h-6 mr-1"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" />
				<circle cx="12" cy="12" r="9" />
				<path d="M9 12l2 2l4 -4" />
			</svg>
			<p className="title-font font-medium">{category.title}</p>
		</>
	);
};

export default CategoryCard;
