import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Home = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://retro-tech-talks.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="">
            <div className="bg-emerald-200 p-6 rounded-lg mt-16 w-full">
                <p className="font-bold font-sans text-2xl">Total Blog: {blogs.length}</p>
            </div>
            <div className="bg-slate-200 mt-16 rounded-lg">
                {
                    blogs.map(blog => <Blog key={blog._id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Home;