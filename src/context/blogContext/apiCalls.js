import axios from "axios"
import { createBlogFailure, createBlogStart, createBlogSuccess, getBlogFailure, getBlogStart, getBlogSuccess, deleteBlogSuccess,deleteBlogStart, deleteBlogFailure } from "./BlogActions";

// get staff
export const getBlog = async(dispatch)=> {
    dispatch(getBlogStart());
    try {
        const res = await axios.get("https://fixontime.herokuapp.com/posts",
            {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        )
        dispatch(getBlogSuccess(res.data.items)) 
        console.log(res.data)
    }catch(err) {
        dispatch(getBlogFailure());
    }
}
// create blog post
export const createBlog = async(blog, dispatch)=> {
    dispatch(createBlogStart());
    console.log(blog)
    try {
        const res = await axios.post("https://fixontime.herokuapp.com/posts", blog ,
            {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
                    // "Access-Control-Allow-Headers": "*",
                    // "Access-Control-Allow-Origin": "*",
                    // "Access-Control-Allow-Methods": "*" 
                }
            }
        )  
        console.log(res)
        dispatch(createBlogSuccess(res.data)) 
    }catch(err) {
        dispatch(createBlogFailure());
    }
}

// delete blog post
export const deleteBlog = async (id, dispatch) => {
    dispatch(deleteBlogStart());

    try{
        const res = await axios.delete("https://fixontime.herokuapp.com/posts/" + id, 
        {
            headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
            }
        })
        console.log(res)

    dispatch(deleteBlogSuccess(id));
    }catch (err) {
        dispatch(deleteBlogFailure())
    }
}   