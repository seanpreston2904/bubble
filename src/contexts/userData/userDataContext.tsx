import { ReactNode, createContext, useReducer } from "react";
import { UserDataContextActions, UserDataContextType, UserDataStateType } from "./userDataTypes";

// Define default state
export const UserDataContextDefaultState: UserDataStateType = {
    isAuthenticated: false
}

// Create user data context with default data.
export const UserDataContext = createContext<UserDataContextType>({ 
    state: {
        isAuthenticated: false
    }
} as UserDataContextType);

/**
 * Reducer for the user data context.
 * 
 * @param state the current state of the context.
 * @param action the action to be performed on the context
 * @returns 
 */
const userDataReducer = (state: UserDataStateType, action: UserDataContextActions) => {

    // Clone current state.
    var updatedState: UserDataStateType = { ...state };
    
    // Update state based on action.
    switch(action) {
        case UserDataContextActions.LogIn:
            updatedState.isAuthenticated = true;
            break;
        case UserDataContextActions.LogOut:
            updatedState.isAuthenticated = false;
            break;
    };

    return updatedState;


};

/**
 * Provider (and required properties) for the user data context. 
 */
type UserDataProviderProps = {
    children: ReactNode;
}

export const UserDataContextProvider: React.FC<UserDataProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(userDataReducer, UserDataContextDefaultState);

    return(
        <UserDataContext.Provider value={{ state, dispatch }}>
            {children}
        </UserDataContext.Provider>
    );

}