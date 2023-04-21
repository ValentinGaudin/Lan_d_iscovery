import React, {useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";
import Card from "./Card";
import {Post} from "../../@types/Post";
import Spinner from "../Spinner";


const posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string[]>();

    useEffect(() => {
        setIsLoading(true)
        axios.get(
            'http://backend.thelaboratory.localhost/api/posts',
        ).then(function (response: AxiosResponse<{ data: Post[] }>) {
            setPosts(response.data.data)
            setIsLoading(false)
        })
            .catch(function (error) {
                setError(error);
            });
    }, [])

    return (
        <section className="dark:text-gray-100">

            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                    <p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                </div>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {!isLoading && posts.length > 0
                        ? posts.map((post) => (<Card post={post} key={post.id} />))
                        : <Spinner />
                    }
                </div>
            </div>

        </section>
    );
}
export default posts;
