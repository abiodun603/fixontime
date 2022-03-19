import { createContext, useReducer } from "react"
import { LearnReducer } from "./LearnReducer";

const INITIAL_STATE = {
    learns: [],
    isFetching: false,
    error: false
}

export const LearnContext = createContext(INITIAL_STATE);

export const LearnContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(LearnReducer, INITIAL_STATE);

    return (
        <LearnContext.Provider
            value = {{
                learns: state.learns,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </LearnContext.Provider>
    )
}