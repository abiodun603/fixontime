import axios from "axios"
import { createLearnFailure, createLearnStart, createLearnSuccess, deleteLearnFailure, deleteLearnStart, deleteLearnSuccess, getLearnFailure, getLearnStart, getLearnSuccess } from "./LearnActions";
import swal from "sweetalert"
// get staff
export const getLearn = async(dispatch)=> {
    dispatch(getLearnStart());
    try {
        const res = await axios.get("https://fixontime.herokuapp.com/learnings")  
        console.log(res.data)
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
        swal({
            title: "Are you sure?",
            text: "Video post have been added up successfully",
            icon: "success",
            confirmButtonColor: '#030762',
            // buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
                // history.push("/blog")
            } else {
              swal("Your imaginary file is safe!");
            }
        }); 

    }catch(err) {
        dispatch(createLearnFailure());
    }
}

// delete learn
// delete blog post
export const deleteLearn = async (id, dispatch) => {
    dispatch(deleteLearnStart());

    try{
        const res = await axios.delete("https://fixontime.herokuapp.com/learnings/" + id, 
        {
            headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
            }
        })
        console.log(res)

    dispatch(deleteLearnSuccess(id));
    swal({
        title: "Are you sure?",
        text: "Video post have been deleted  successfully",
        icon: "success",
        confirmButtonColor: '#030762',
        // buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
            // history.push("/blog")
        } else {
          swal("Your imaginary file is safe!");
        }
    }); 
    }catch (err) {
        dispatch(deleteLearnFailure())
    }
}   