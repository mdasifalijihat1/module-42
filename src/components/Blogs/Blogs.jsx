import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [bloges, setBloges] =useState([]);
    useEffect(() => {
        fetch('bloges.json')
        .then(res => res.json())
        .then(data => setBloges(data))
    },[])

    return (
        <div className="md: w-2/3">
            <h2> Blocks {bloges.length} </h2>
        </div>
    );
};

export default Blogs;