import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
    const navigate = useNavigate()
    return (
        <div className="border-solid border-2 border-white p-6 rounded-lg">
            <h1 className="font-bold text-xl text-slate-500">Titile: {blog.title}</h1>
            <div className="flex justify-center mt-6 rounded-lg">
                <img className="w-72 rounded-lg" src={blog.imageURL} alt="" />
            </div>
            <button onClick={() => navigate(`/blog/${blog._id}`)} className="rounded-full bg-slate-500 p-3 mt-6">
                See Details
            </button>
        </div>
    );
};

export default Blog;