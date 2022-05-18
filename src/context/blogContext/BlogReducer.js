export const BlogReducer = (state, action) => {
    switch (action.type) {
        case "GET_BLOG_START": 
            return {
                blogs: [],
                isFetching: true,
                error: false
            };
        case "GET_BLOG_SUCCESS":
            return {
                ...state,
                blogs: action.payload,
                isFetching:  false,
                error: false
            }
        case "GET_BLOG_FAILURE":
            return {
                blogs: null,
                isFetching: false,
                error: true
            }
        case "DELETE_BLOG_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "DELETE_BLOG_SUCCESS": 
           console.log(action.payload);

            return {
                ...state,
                blogs: state.blogs.filter((blog) => blog.id !== action.payload),
                isFetching: false,
                error: false
            }
        case "DELETE_BLOG_FAILURE": 
            return {
                ...state,
                isFetching: false,
                error: false
            }
        case "CREATE_BLOG_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        
        case "CREATE_BLOG_SUCCESS":
            return {
                ...state,
                blogs: [...state.blogs, action.payload],
                isFetching: false,
                error: false
            }
        case "CREATE_BLOG_FAILURE": 
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default: {
            return {...state}
        }
    }
}

