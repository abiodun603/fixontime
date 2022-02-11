import axios from "axios"
import { createLearnFailure, createLearnStart, createLearnSuccess, deleteLearnFailure, deleteLearnStart, deleteLearnSuccess, getLearnFailure, getLearnStart, getLearnSuccess } from "./LearnActions";

// get staff
export const getLearn = async(dispatch)=> {
    dispatch(getLearnStart());
    try {
        const res = await axios.get("https://fixontime.herokuapp.com/learnings",
            {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        )  
        // console.log(res.data)
        dispatch(getLearnSuccess(res.data.items)) 
    }catch(err) {
        dispatch(getLearnFailure());
    }
}
// create staff
export const createLearn = async(learn, dispatch)=> {
    dispatch(createLearnStart());
    // console.log(blog)
    try {
        const res = await axios.post("https://fixontime.herokuapp.com/learnings", learn ,
            {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        )
            //                 setGetBlogPost(res.data.items)
            //             })
            console.log(res.data)
            dispatch(createLearnSuccess(res.data)) 

    }catch(err) {
        dispatch(createLearnFailure());
    }
}

// delete learn
// delete blog post
export const deleteLearn = async (id, dispatch) => {
    dispatch(deleteLearnStart());

    try{
        const res = await axios.delete("https://fixontime.herokuapp.com/posts/" + id, 
        {
            headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
            }
        })
        console.log(res)

    dispatch(deleteLearnSuccess(id));
    }catch (err) {
        dispatch(deleteLearnFailure())
    }
}   