export const getBlogStart = () => ({
    type: "GET_STAFF_START"
});

export const getBlogSuccess = (staff) => ({
    type: "GET_STAFF_SUCCESS",
    payload: staff,
});

export const getBlogFailure = ({
    type: "GET_STAFF_FAILURE"
})

// Create Staff
export const createBlogStart = () => ({
    type: "CREATE_BLOG_START"
})

export const createBlogSuccess = (blogs) => ({
    type: "CREATE_BLOG_SUCCESS",
    payload: blogs
})

export const createBlogFailure = () => ({
    type: "CREATE_BLOG_FAILURE"
})

// Delete Staff
// export const deleteStaffStart = () => ({
//     type: "DELETE_STAFF_START"
// })

// export const deleteStaffSuccess = (id) => ({
//     type: "DELETE_STAFF_SUCCESS",
//     payload: id
// })

// export const deleteStaffFailure = () => ({
//     type: "DELETE_STAFF_FAILURE"
// })
