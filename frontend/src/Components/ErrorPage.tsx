import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div id="error-page" className="flex flex-col mx-auto justify-around items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[300px] h-[300px] rounded-lg bg-transparent w-3/6 backdrop-blur-md border-2 border-solid dark:border-amber-100 border-blue-100">
            <h1 className="text-base-light dark:text-white text-2xl font-bold">
                Oops!
            </h1>
            <p className="text-base-light dark:text-white">
                Sorry, an unexpected error has occurred.
            </p>
            <p className="text-red-400">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
export default ErrorPage;