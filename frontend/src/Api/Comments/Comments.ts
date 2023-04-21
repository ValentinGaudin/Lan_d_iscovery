import axios, {AxiosResponse} from 'axios';
import {Comment} from "../../@types/Comment";
import {BASE_URL} from "../Base";
import {Post} from "../../@types/Post";

type createComment = {
    content: string,
    user_id: number,
    post_id: number,
}
function createComment (data: createComment): Promise<Comment> {
    return axios.post(`${BASE_URL}/comments`, {
        data,
    }).then((response: AxiosResponse<{ data: Comment }>) => response.data.data);
}