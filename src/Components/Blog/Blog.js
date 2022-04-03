import React from 'react';

const Blog = ({ blog }) => {
    return (
        <div className="border-solid border-2 border-white p-6 rounded-lg">
            <h1 className="font-bold text-xl text-slate-500">Titile: {blog.title}</h1>
            <div className="flex justify-center mt-6 rounded-lg">
                <img className="w-40 rounded-lg" src={blog.imageURL} alt="" />
            </div>
            <button className="rounded-full bg-slate-500 p-3 mt-6">
                See Details
            </button>
        </div>
    );
};

export default Blog;