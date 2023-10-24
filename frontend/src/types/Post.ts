import { Category } from './Category';

export type Post = {
	id: number;
	slug: string;
	title: string;
	description: string;
	is_active: boolean;
	is_featured: boolean;
	is_premium: boolean;
	is_sponsored: boolean;
	is_trending: boolean;
	created_at: string;
	updated_at: string;
	deleted_at: string | null;
	categories: Category[];
};
