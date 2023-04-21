import React from 'react';
import {Comment} from "../../@types/Comment";

type Props = {
    comment: Comment
}

const Show = ({ comment } : Props) => {
    return (
        <div
            className="flex flex-col justify-end py-1 mb-4 space-y-2 bg-white border border-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="text-sm text-gray-500 dark:text-gray-300">
                <p className="flex items-center px-5 py-2 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white dark:border-gray-600">
                    <span className="text-sm font-medium">
                        {comment.user.full_name}
                    </span>
                </p>
                <p className="flex items-center px-5 py-2 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white dark:border-gray-600">
                    <span className="text-sm font-medium">
                        {comment.content}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Show;