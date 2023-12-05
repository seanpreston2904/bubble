import { ReactNode, createContext, useReducer } from "react";
import { UserDataContextAction, UserDataContextActions, UserDataContextType, UserDataStateType } from "./userDataTypes";

// Define default state
export const UserDataContextDefaultState: UserDataStateType = {
    isAuthenticated: false,
    userData: undefined
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
const userDataReducer = (state: UserDataStateType, action: UserDataContextAction) => {

    // Clone current state.
    var updatedState: UserDataStateType = { ...state };

    console.log("REDUCER HIT")
    
    // Update state based on action.
    switch(action.type) {
        case UserDataContextActions.UnloadUserData:
            updatedState.isAuthenticated = false;
            updatedState.userData = undefined;
            break;
        case UserDataContextActions.LoadUserData:

            console.log("FROM USER DATA CONTEXT - "+action.payload.newProfilePhotoUrl)

            // Update authentication state.
            updatedState.isAuthenticated = true;

            // Append new user data to state.
            updatedState.userData = {
                userName: action.payload.newUserName,
                profilePhotoUrl: action.payload.newProfilePhotoUrl,
                email: action.payload.newEmail
            }

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