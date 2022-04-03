import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [blog,setBlog] = useState([])

    useEffect(() => {
        fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data))
    },[id])
    return (
        <div className="bg-slate-200 mt-16 rounded-lg p-6">
            <h1 className="font-bold text-xl text-slate-500">Titile: {blog.title}</h1>
            <div className="flex justify-center mt-6 rounded-lg">
                <img className="w-72 rounded-lg" src={blog.imageURL} alt="" />
            </div>
            <div className="mt-6 ">
                <p className="text-slate-600">{blog.blog}</p>
            </div>
            <div>
                <button onClick={() => navigate("/home")} className="rounded-full bg-slate-500 p-3 mt-6">
                    back to home
                </button>
            </div>
        </div>
    );
};

export default BlogDetails;