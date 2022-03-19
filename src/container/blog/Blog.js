import React, {useState, useEffect, useContext } from 'react'
import { BlogContainer, BlogLand } from './StyledBlog'
import One from "../../assets/image/blog/1.svg"
import Two from "../../assets/image/blog/2.svg"
import Three from "../../assets/image/blog/3.svg"
import HeadFoot from '../../components/HeadFoot';
import { Input } from '../contact/StyledContact';
import { FiSearch } from 'react-icons/fi';
import BCard from '../../components/blog-card/BCard'
import { useHistory } from 'react-router-dom'
import { BlogContext } from '../../context/blogContext/BlogContext'
import { getBlog } from '../../context/blogContext/apiCalls'

function Blog(props) {
    const [getBlogPost, setGetBlogPost] = useState([])
    const {blogs, dispatch} = useContext(BlogContext)

    const history = useHistory()
    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: 'numeric',
        month: "long",
        day: "2-digit"
    });

    useEffect(() => { 
        getBlog(dispatch)
        // setGetBlogPost(blogs);
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

