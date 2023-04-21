import {User} from "./User";

export type Comment = {
    id: number,
    content: string,
    created_at: string,
    updated_at: string,
    user: User,
}