import React, {useEffect, useState, useReducer, useContext} from "react"
import Header from "../../components/header/Header"
// import
import {useHistory} from "react-router-dom"
import BCard from "../../components/blog-card/BCard"
import { BlogContext } from "../../context/blogContext/BlogContext"
import {getBlog, deleteBlog} from "../../context/blogContext/apiCalls"
import axios from "axios"


const Blog = (props) => {
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

    // useEffect(() => { 
    //     async function fetchBlog() {
    //         try {
    //             const res = await axios.get("https://fixontime.herokuapp.com/posts",
    //                 {
    //                     headers: {
    //                         "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
    //                     }
    //                 }
    //             ).then((res) => {
    //                 setGetBlogPost(res.data.items)
    //             })

    //         }catch(err) {
    //             console.log(err)
    //         }
    //      }
    //      fetchBlog()  

    // }, [])
    const handleDelete = (id) => {
        deleteBlog(id, dispatch)
        console.log(id)
     }

    const handleUpdate = (id) => {
        console.log(id)
        history.push(`/editPost/${id}`)
    }

    console.log(getBlogPost);

    return (
        <>
             <Header
                header= "Blog Post"
                title = "New Blog Post"
                onClick = {() => history.push("/addPost")}
            />

            <div style = {{display: "flex", flexWrap: "wrap", alignItems: "center"}}>
                {
                    blogs.map((item, index) => (
                            <div key = {index}>
                                <BCard
                                    src = {item.image}
                                    title= {item.title}
                                    date= {formatter.format(new Date(item.created_at))}
                                    onDelete = {()  => handleDelete(item.id)}
                                    onEdit = {() => handleUpdate(item.id)}
                                />
                           </div>
                       )
                   )
                }
            </div>
             
        </>
    )
}

export default Blog


