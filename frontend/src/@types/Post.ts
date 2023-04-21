import {User} from "./User";
import {Category} from "./Category";
import {Comment} from "./Comment";

export type Post = {
    id: number,
    title: string,
    description: string,
    is_active: boolean,
    author: User,
    created_at: string
    updated_at: string
    deleted_at: string

    users: User[],
    categories : Category[]
    comments : Comment[]
}