import { BoxArrowLeft, GearFill, PersonFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../contexts/userData/userDataHook";
import { UserDataContextActions } from "../../contexts/userData/userDataTypes";

const AccountModal: React.FC = () => {

    const navigate = useNavigate();
    const { dispatch } = useUserData();

    return(
        <div className="bg-white shadow-md shadow-gray-500/10 absolute right-6 top-20 rounded-md w-48">
            <button className="hover:bg-gray-100 transition-colors py-2 px-4 flex w-full rounded-t-md" onClick={() => navigate("account/sean.preston")}>
                <PersonFill className="text-gray-800 my-auto mr-2"/>
                <p className="font-semibold text-gray-800">Your Account</p>
            </button>
            <button className="hover:bg-gray-100 transition-colors py-2 px-4 flex w-full">
                <GearFill className="text-gray-800 my-auto mr-2"/>
                <p className="font-semibold text-gray-800">Settings</p>
            </button>
            <button 
                className="hover:bg-gray-100 transition-colors py-2 px-4 flex w-full rounded-b-md"
                onClick={() => dispatch(UserDataContextActions.LogOut)}
            >
                <BoxArrowLeft className="text-gray-800 my-auto mr-2"/>
                <p className="font-semibold text-gray-800">Log Out</p>
            </button>
        </div>
    );

}

export default AccountModal;