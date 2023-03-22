import react from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="rounded-full border-t-4 border-b-4 border-gray-900 h-12 w-12 mr-3 animate-spin"></div>
            <div className="text-gray-900 text-lg font-medium">Loading...</div>
        </div>
    );
};

export default Spinner;