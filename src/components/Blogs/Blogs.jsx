import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [bloges, setBloges] =useState([]);
    useEffect(() => {
        fetch('bloges.json')
        .then(res => res.json())
        .then(data => setBloges(data))
    },[])

    return (
        <div className="md: w-2/3">
            <h2> Blocks {bloges.length} </h2>
            {
             bloges.map(blog => <Blog 
                key={blog.id} 
                blog={blog}
                handleAddToBookmark ={handleAddToBookmark}
                handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};



Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;