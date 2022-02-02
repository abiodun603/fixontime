import { createContext, useReducer } from "react"
import { StaffReducer } from "./StaffReducer";

const INITIAL_STATE = {
    staff: [],
    isFetching: false,
    error: false
}



export const StaffContext = createContext(INITIAL_STATE);

export const StaffContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(StaffReducer, INITIAL_STATE);

    return (
        <StaffContext.Provider
            value = {{
                staff: state.staff,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </StaffContext.Provider>
    )
}