/**
 * Type for the user data context
 */
export type UserDataStateType = {
    isAuthenticated: boolean
}

// Define different actions for user data context.
// TODO: Refactor the shit out of this to support strongly typed payloads... Oh boy...
export enum UserDataContextActions {
    LogIn,
    LogOut
};

export type UserDataContextType = {
    state: UserDataStateType,
    dispatch: React.Dispatch<UserDataContextActions>
}