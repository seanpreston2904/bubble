import { EnvelopeAtFill, KeyFill } from "react-bootstrap-icons";
import logo from "../../../assets/logo.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../firebase";

const LoginModal: React.FC = () => {

    // Keep track of username and password inputs.
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    // State for sign in loading
    const [signInLoading, setSignInLoading] = useState(false);

    const navigate = useNavigate();

    /**
     * Function for handling user sign in.
     */
    const handleSignIn = async () => {

        setSignInLoading(true);

        const signInResult = await signIn(emailInput, passwordInput);

        if(signInResult){
            console.error(signInResult)
        }

        navigate("/app");

    }

    return(
        <div className="flex flex-col mx-auto my-auto px-10 py-8 shadow-md rounded-md p-4 space-y-6">
            <div className="flex space-x-2 mx-auto">
                <img src={logo} className="w-10 h-10 my-auto"/>
                <h1 className="text-3xl text-gray-800 font-bold my-auto">BUBBLE</h1>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="flex">
                    <div className="flex bg-gray-100 rounded-l-md w-8">
                        <EnvelopeAtFill className="text-gray-400 my-auto mx-auto"/>
                    </div>
                    <input 
                        placeholder="E-Mail"
                        className="py-2 pr-2 bg-gray-100 rounded-r-md focus:outline-none font-semibold"
                        onInput={
                            (e: React.ChangeEvent<HTMLInputElement>) => { setEmailInput(e.target.value); }
                        }
                    />
                </div>
                <div className="flex">
                    <div className="flex bg-gray-100 rounded-l-md w-8">
                        <KeyFill className="text-gray-400 my-auto mx-auto"/>
                    </div>
                    <input 
                        placeholder="Password"
                        type="password"
                        className="py-2 pr-2 bg-gray-100 rounded-r-md focus:outline-none font-semibold"
                        onInput={
                            (e: React.ChangeEvent<HTMLInputElement>) => { setPasswordInput(e.target.value); }
                        }
                    />
                </div>
            </div>
            <button 
                className="bg-blue-400 disabled:bg-blue-300 w-fit mx-auto p-2 rounded-md px-4 hover:shadow-md transition-all"
                disabled={signInLoading}
                onClick={() => handleSignIn()}
            >
                <p className="text-white font-semibold">{signInLoading ? "Loading": "Sign In"}</p>
            </button>
            <div className="flex mx-auto space-x-1">
                <h3 className="text-gray-400">New here?</h3>
                <button className="text-blue-400 font-semibold" onClick={() => navigate("/register")}>Register</button>
            </div>
        </div>
    );

}

export default LoginModal;