import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData();
    const { title, description, image } = details;

    return (
        <div>
            <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 mx-auto my-20 rounded-lg">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    </div>
                    <div className="space-y-10">
                        <h3 className="text-5xl font-semibold dark:text-yellow-600">{title}</h3>
                        <p className="text-lg dark:text-gray-300">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;