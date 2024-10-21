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
        <div>
            <h3> name: {bloges.cover}</h3>
        </div>
    );
};

export default Blogs;