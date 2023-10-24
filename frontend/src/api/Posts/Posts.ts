import axios from 'axios';
import type { AxiosResponse } from 'axios';

import { Post } from '@/types/Post';

const BASE_URL = 'http://backend.thelaboratory.localhost/api';

function fetchPosts(): Promise<Post[]> {
	return axios
		.get(`${BASE_URL}/posts`)
		.then((response: AxiosResponse<{ data: Post[] }>) => response.data.data);
}

function fetchPost(id: string): Promise<Post> {
	return axios
		.get(`${BASE_URL}/posts/${id}`)
		.then((response: AxiosResponse<{ data: Post }>) => response.data.data);
}

function searchPosts(search: string): Promise<Post[]> {
	return axios
		.post(`${BASE_URL}/posts/search/`, {
			search,
		})
		.then((response: AxiosResponse<{ data: Post[] }>) => response.data.data);
}
function createPost(data: Post): Promise<Post> {
	return axios
		.post(`${BASE_URL}/posts`, {
			data,
		})
		.then((response: AxiosResponse<{ data: Post }>) => response.data.data);
}

function updatePost(id: number, data: Post): Promise<Post> {
	return axios
		.put(`${BASE_URL}/posts/${id}`, {
			data,
		})
		.then((response: AxiosResponse<{ data: Post }>) => response.data.data);
}

function deletePost(id: number): Promise<void> {
	return axios
		.delete(`${BASE_URL}/posts/${id}`)
		.then((response: AxiosResponse) => response.data);
}

export {
	fetchPosts,
	fetchPost,
	searchPosts,
	createPost,
	updatePost,
	deletePost,
};
