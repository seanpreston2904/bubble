import { Navigate } from "react-router-dom";
import AccountHeader from "../components/shared/account/accountHeader";
import Post from "../components/shared/post/post";
import { useUserData } from "../contexts/userData/userDataHook";

const AccountLayout: React.FC = () => {

    const {state} = useUserData();

    // If user is not logged in - force them to login page.
    if(!state.isAuthenticated){ return <Navigate to="/login"/> }

    return(
        <div className="flex flex-col mx-auto space-y-6">
            <AccountHeader/>
            <div className="flex flex-col space-y-4">
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );

}

export default AccountLayout;