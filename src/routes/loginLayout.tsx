import { Navigate } from "react-router-dom";
import LoginModal from "../components/shared/login/loginModal";
import { useUserData } from "../contexts/userData/userDataHook";
import { useEffect } from "react";

const LoginLayout: React.FC = () => {

    const {state} = useUserData();

    // If user is logged in - navigate to home page.
    if(state.isAuthenticated){ return <Navigate to="/app"/> }

    return(
        <div className="w-screen h-screen flex flex-col">
            <div className="flex flex-grow">
                <LoginModal/>
            </div>
            <div className="flex mx-auto p-4 text-gray-400">
                <p>Sean Preston - 2023 - GitHub</p>
            </div>
        </div>
    );

}

export default LoginLayout;