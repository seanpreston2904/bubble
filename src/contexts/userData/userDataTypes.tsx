/**
 * Type for the user data context.
 */
export type UserDataStateType = {
    isAuthenticated: boolean
    userData: {
        userName: string
        profilePhotoUrl: string
        email: string
    } | undefined
}

// Define different actions for user data context.
// TODO: Refactor the shit out of this to support strongly typed payloads... Oh boy...
export enum UserDataContextActions {
    LoadUserData,
    UnloadUserData
};

// Define type for user data context action.
export type UserDataContextAction = 
    | { type: UserDataContextActions.UnloadUserData; }
    | { type: UserDataContextActions.LoadUserData; payload: UserDataContextActionPayloads[UserDataContextActions.LoadUserData]}


// Define payloads for user data context actions.
export type UserDataContextActionPayloads = {
    [UserDataContextActions.LoadUserData]: {
        newProfilePhotoUrl: string
        newUserName: string
        newEmail: string
    }
}

export type UserDataContextType = {
    state: UserDataStateType,
    dispatch: React.Dispatch<UserDataContextAction>
}