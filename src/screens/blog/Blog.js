import React, {useEffect, useContext} from "react"
import Header from "../../components/header/Header"
import {useHistory} from "react-router-dom"
import BCard from "../../components/blog-card/BCard"
import { BlogContext } from "../../context/blogContext/BlogContext"
import {getBlog, deleteBlog} from "../../context/blogContext/apiCalls"


const Blog = () => {
    const {blogs, dispatch} = useContext(BlogContext)

    const history = useHistory()
    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: 'numeric',
        month: "long",
        day: "2-digit"
    });

    useEffect(() => { 
        getBlog(dispatch)
    },[dispatch]) 

    const handleDelete = (id) => {
        deleteBlog(id, dispatch)
        console.log(id)
     }

    const handleUpdate = (id) => {
        console.log(id)
        history.push(`/editPost/${id}`)
    }

    console.log(blogs)


    return (
        <>
             <Header
                header= "Blog Post"
                title = "New Blog Post"
                onClick = {() => history.push("/addPost")}
            />

            <div style = {{display: "flex", flexWrap: "wrap", alignItems: "center"}}>
                {
                  blogs?.data?.data?.map((item, index) => (
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


