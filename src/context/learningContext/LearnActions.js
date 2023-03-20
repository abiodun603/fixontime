export const getLearnStart = () => ({
    type: "GET_LEARN_START"
});

export const getLearnSuccess = (learns) => ({
    type: "GET_LEARN_SUCCESS",
    payload: learns,
});

export const getLearnFailure = () => ({
    type: "GET_LEARN_FAILURE"
})

// Create Staff
export const createLearnStart = () => ({
    type: "CREATE_LEARN_START"
})

export const createLearnSuccess = (learns) => ({
    type: "CREATE_LEARN_SUCCESS",
    payload: learns
})

export const createLearnFailure = () => ({
    type: "CREATE_LEARN_FAILURE"
})

// Delete E-Learning
export const deleteLearnStart = () => ({
    type: "DELETE_LEARN_START"
})

export const deleteLearnSuccess = (id) => ({
    type: "DELETE_LEARN_SUCCESS",
    payload: id
})

export const deleteLearnFailure = () => ({
    type: "DELETE_LEARN_FAILURE"
})
