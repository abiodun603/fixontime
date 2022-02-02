export const getStaffStart = () => ({
    type: "GET_STAFF_START"
});

export const getStaffSuccess = (staff) => ({
    type: "GET_STAFF_SUCCESS",
    payload: staff,
});

export const getStaffFailure = ({
    type: "GET_STAFF_FAILURE"
})

// Delete Staff
export const deleteStaffStart = () => ({
    type: "DELETE_STAFF_START"
})

export const deleteStaffSuccess = (id) => ({
    type: "DELETE_STAFF_SUCCESS",
    payload: id
})

export const deleteStaffFailure = () => ({
    type: "DELETE_STAFF_FAILURE"
})

// Create Staff
export const createStaffStart = () => ({
    type: "CREATE_STAFF_START"
})

export const createStaffSuccess = (staff) => ({
    type: "CREATE_CREATE_SUCCESS",
    payload: staff
})

export const createStaffFailure = () => ({
    type: "CREATE_MOVIE_FAILURE"
})