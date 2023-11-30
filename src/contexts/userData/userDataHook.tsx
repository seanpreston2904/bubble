import { useContext } from "react";
import { UserDataContext } from "./userDataContext"

/**
 * 
 */
export const useUserData = () =>  useContext(UserDataContext);