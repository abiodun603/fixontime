export const StaffReducer = (state, action) => {
    switch (action.type) {
        case "GET_STAFF_START": 
            return {
                staff: [],
                isFetching: true,
                error: false
            };
        case "GET_STAFF_SUCCESS":
            return {
                staff: action.payload,
                isFetching:  false,
                error: false
            }
        case "GET_STAFF_FAILURE":
            return {
                staff: null,
                isFetching: false,
                error: true
            }
        case "DELETE_STAFF_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "DELETE_STAFF_SUCCESS": 
            return {
                staff: state.staff.filter((staf) => staf.id !== action.payload),
                isFetching: false,
                error: false
            }
        case "DELETE_STAFF_FAILURE": 
            return {
                ...state,
                isFetching: false,
                error: false
            }
        case "CREATE_STAFF_START":
            return {
                ...state,
                isFetching: true,
                error: false,

            }
        
        case "CREATE_STAFF_SUCCESS":
            return {
                staff: [...state, action.payload],
                isFetching: false,
                error: false
            }
        case "CREATE_STAFF_FAILURE": 
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

