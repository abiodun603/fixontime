import axios from "axios"
import { createBlogFailure, createBlogStart, createBlogSuccess } from "./BlogActions";


// create staff


export const createBlog = async(blog, dispatch)=> {
    dispatch(createBlogStart());

    try {
        const res = await axios.post("https://candid-nest.herokuapp.com/Staff", blog ,
            {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        )  
        dispatch(createBlogSuccess(res.data)) 
    }catch(err) {
        dispatch(createBlogFailure());
    }
}