import { createStaffFailure, createStaffStart, createStaffSuccess, deleteStaffFailure, deleteStaffStart, deleteStaffSuccess, getStaffFailure, getStaffStart, getStaffSuccess } from "./StaffActions"
import axios from "axios"

export const getStaff = async (dispatch) => {
    dispatch(getStaffStart());

    const token = JSON.parse(localStorage.getItem("user")).access_token

    console.log(token)
    try {
        const res = await axios.get("https://candid-nest.herokuapp.com/soldiers",
            {
                headers: {
                    token: "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
                },
            }
        );
        dispatch(getStaffSuccess(res.data));
        console.log(res.data);
    } catch (err) {
        dispatch(getStaffFailure());
        
    }
}

export const deleteStaff = async (id, dispatch) => {
    dispatch(deleteStaffStart());

    try{
        const res = await axios.delete("https://candid-nest.herokuapp.com/soldiers/" + id, 
        {
            headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
            }
        })
        console.log(res)

    dispatch(deleteStaffSuccess(id));
    }catch (err) {
        dispatch(deleteStaffFailure())
    }
}   

// create staff
export const createStaff = async(staff, dispatch)=> {
    dispatch(createStaffStart());

    try {
        const res = await axios.post("https://candid-nest.herokuapp.com/Staff", staff ,
            {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        )  
        dispatch(createStaffSuccess(res.data)) 
    }catch(err) {
        dispatch(createStaffFailure());
    }
}