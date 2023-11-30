import { Google } from "react-bootstrap-icons";
import logo from "../../../assets/logo.png"
import { useUserData } from "../../../contexts/userData/userDataHook";
import { UserDataContextActions } from "../../../contexts/userData/userDataTypes";

const LoginModal: React.FC = () => {

    const {state, dispatch} = useUserData();

    return(
        <div className="flex flex-col mx-auto my-auto shadow-md rounded-md p-4 space-y-6">
            <div className="flex space-x-2 mx-auto">
                <img src={logo} className="w-10 h-10 my-auto"/>
                <h1 className="text-3xl text-gray-800 font-bold my-auto">BUBBLE</h1>
            </div>
            <button className="flex hover:shadow-md transition-shadow" onClick={() => {dispatch(UserDataContextActions.LogIn); console.log(state.isAuthenticated)}}>
                <div className="flex rounded-l-md bg-gray-400 w-10 h-10">
                    <Google className="text-white text-xl mx-auto my-auto"/>
                </div>
                <div className="flex rounded-r-md px-3 h-10 bg-gray-200">
                    <p className="my-auto font-semibold text-gray-800">Login with Google</p>
                </div>
            </button>
        </div>
    );

}

export default LoginModal;