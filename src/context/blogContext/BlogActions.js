export const getBlogStart = () => ({
    type: "GET_BLOG_START"
});

export const getBlogSuccess = (blogs) => ({
    type: "GET_BLOG_SUCCESS",
    payload: blogs,
});

export const getBlogFailure = () => ({
    type: "GET_BLOG_FAILURE"
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

// Delete Blog
export const deleteBlogStart = () => ({
    type: "DELETE_STAFF_START"
})

export const deleteBlogSuccess = (id) => ({
    type: "DELETE_BLOG_SUCCESS",
    payload: id
})

export const deleteBlogFailure = () => ({
    type: "DELETE_BLOG_FAILURE"
})
