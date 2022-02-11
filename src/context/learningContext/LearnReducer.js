export const LearnReducer = (state, action) => {
    switch (action.type) {
        case "GET_LEARN_START": 
            return {
                learns: [],
                isFetching: true,
                error: false
            };
        case "GET_LEARN_SUCCESS":
            return {
                learns: action.payload,
                isFetching:  false,
                error: false
            }
        case "GET_LEARN_FAILURE":
            return {
                learns: null,
                isFetching: false,
                error: true
            }
        case "DELETE_LEARN_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "DELETE_LEARN_SUCCESS": 
            return {
                learns: state.learns.filter((learn) => learn.id !== action.payload),
                isFetching: false,
                error: false
            }
        case "DELETE_LEARN_FAILURE": 
            return {
                ...state,
                isFetching: false,
                error: false
            }
        case "CREATE_LEARN_START":
            return {
                ...state,
                isFetching: true,
                error: false,

            }
        case "CREATE_LEARN_SUCCESS":
            return {
                ...state,
                learns:[...state.blogs, action.payload],
                isFetching: false,
                error: false
            }
        case "CREATE_LEARN_FAILURE": 
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