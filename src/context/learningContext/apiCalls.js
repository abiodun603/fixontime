import axios from "axios"
import { createLearnFailure, createLearnStart, createLearnSuccess, deleteLearnFailure, deleteLearnStart, deleteLearnSuccess, getLearnFailure, getLearnStart, getLearnSuccess } from "./LearnActions";
import swal from "sweetalert"
// get staff
export const getLearn = async(dispatch)=> {
    dispatch(getLearnStart());
    try {
        const res = await axios.get("https://v1.api.seenergysolutions.org/api/learnings")  
        console.log(res.data)
        dispatch(getLearnSuccess(res.data.data)) 
    }catch(err) {
        dispatch(getLearnFailure());
    }
}
// create staff
export const createLearn = async(learn, dispatch)=> {
    dispatch(createLearnStart());
    const at = JSON.parse(localStorage.getItem("user")).data.token;

    console.log(at)
    try {
        const res = await axios.post("https://v1.api.seenergysolutions.org/api/learnings", learn ,
            {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
                }
            }
        )

        swal({
            text: "Learning post added  successfully",
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
        const res = await axios.delete("https://v1.api.seenergysolutions.org/api/learnings/" + id, 
        {
            headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
            }
        })
        console.log(res)

    dispatch(deleteLearnSuccess(id));
    swal({
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