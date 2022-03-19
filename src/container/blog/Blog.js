import React, {useEffect, useContext } from 'react'
import {BlogLand } from './StyledBlog'
import HeadFoot from '../../components/HeadFoot';
import { Input } from '../contact/StyledContact';
import { FiSearch } from 'react-icons/fi';
import BCard from '../../components/blogcard/BCard'
import { BlogContext } from '../../context/blogContext/BlogContext'
import { getBlog } from '../../context/blogContext/apiCalls'

function Blog(props) {
    const {blogs, dispatch} = useContext(BlogContext)

    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: 'numeric',
        month: "long",
        day: "2-digit"
    });

    useEffect(() => { 
        getBlog(dispatch)
    },[dispatch]) 
    
    useEffect(() => {
        props.setSidebar(false);
    },[]);

    return (
        <>
            <HeadFoot {...props}>
                <BlogLand>
                    <h1>The FixOnTimeBlog</h1>
                    <p>Actionable tips. Curated for you.</p>
                    <div className='searchContainer'>
                        <Input type="text" placeholder="Search" style={{background: "#F9F9F9"}}/>
                        <FiSearch className='searchIcon'/>
                    </div>
                </BlogLand>
                <div style = {{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center"}}>
                {
                    blogs.map((item, index) => (
                            <div key = {index}>
                                <BCard
                                    src = {item.image}
                                    title= {item.title}
                                    content = {item.content}
                                    date= {formatter.format(new Date(item.created_at))}
                                    />
                           </div>
                       )
                   )
                }
            </div>
            </HeadFoot>
        </>   
    )
}

export default Blog;

