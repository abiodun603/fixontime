import axios from "axios"
import { createBlogFailure, createBlogStart, createBlogSuccess, getBlogFailure, getBlogStart, getBlogSuccess, deleteBlogSuccess,deleteBlogStart, deleteBlogFailure } from "./BlogActions";
import swal from "sweetalert"

// get staff
export const getBlog = async(dispatch)=> {
    dispatch(getBlogStart());
    try {
        const res = await axios.get("https://v1.api.seenergysolutions.org/api/posts")
        dispatch(getBlogSuccess(res.data.data)) 
        console.log(res.data.data)
    }catch(err) {
        dispatch(getBlogFailure());
    }
}
// create blog post
export const createBlog = async(blog, dispatch)=> {
    // const history = useHistory()

    dispatch(createBlogStart());
    console.log(blog)
    try {
        const res = await axios.post("https://v1.api.seenergysolutions.org/api/posts", blog ,
            {
              headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token,
              }
            }
        )
        console.log(res)
        swal({
            title: "Are you sure?",
            text: "New blog post have been uploaded successfully",
            icon: "success",
            confirmButtonColor: '#030762',
            // buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
            } else {
              swal("Your imaginary file is safe!");
            }
        });
        dispatch(createBlogSuccess(res.data)) 
    }catch(err) {
        dispatch(createBlogFailure());
    }
}

// delete blog post
export const deleteBlog = async (id, dispatch) => {
    dispatch(deleteBlogStart());

    try{
        await axios.delete("https://v1.api.seenergysolutions.org/api/posts/" + id, 
        {
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
            },
            validateStatus : status => {
              return true;
            }
        })
        dispatch(deleteBlogSuccess(id));
        swal({
            title: "Are you sure?",
            text: "Blog post have been de;eted successfully",
            icon: "success",
            confirmButtonColor: '#030762',
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
            } else {
              swal("Your imaginary file is safe!");
            }
        }); 
    }catch (err) {
        dispatch(deleteBlogFailure())
    }
}   