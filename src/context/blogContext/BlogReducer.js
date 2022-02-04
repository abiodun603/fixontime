export const StaffReducer = (state, action) => {
    switch (action.type) {
        case "GET_BLOG_START": 
            return {
                staff: [],
                isFetching: true,
                error: false
            };
        case "GET_BLOG_SUCCESS":
            return {
                staff: action.payload,
                isFetching:  false,
                error: false
            }
        case "GET_BLOG_FAILURE":
            return {
                staff: null,
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
            return {
                staff: state.blogs.filter((blog) => blog.id !== action.payload),
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
                staff: [...state, action.payload],
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

