import { useNavigate } from "react-router-dom";
import profilePhoto from "../../assets/profile.jpg"
import { CameraFill, EnvelopeAtFill, Key, KeyFill, PersonFill } from "react-bootstrap-icons";
import { auth, db, registerUser } from "../../firebase";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png"
import { ChangeEvent } from "react";
import { AuthError, UserCredential, onAuthStateChanged } from "firebase/auth";
import { doc } from "firebase/firestore";
import { useUserData } from "../../contexts/userData/userDataHook";
import { UserDataContextActions } from "../../contexts/userData/userDataTypes";
import sampleProfilePhoto from "../../assets/sampleProfilePhoto.png"

interface RegisterModalProps {
    defaultUsername?: string
}

const RegisterModal: React.FC<RegisterModalProps> = (props) => {

    const navigate = useNavigate();

    // State for keeping track of input fields
    const [usernameInput, setUsernameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const [profilePhotoInput, setProfilePhotoInput] = useState<File | null>();

    // State for registration loading
    const [registerLoading, setRegisterLoading] = useState(false);

    /**
     * Function for handling profile photo uploads.
     */
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleImageUpload = () => {
        if(fileInputRef.current) fileInputRef.current.click();
    }

    /**
     * Function for handling profile photo change.
     */
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if(file) setProfilePhotoInput(file);
    }

    /**
     * Function for handling user registration.
     */
    const handleRegister = async () => {

        setRegisterLoading(true);

        // Create user and retrieve user credential.
        await registerUser(emailInput, passwordInput, usernameInput, profilePhotoInput!);

        // Navigate to main app upon authentication.
        navigate("/app")

    }

    return(
        <div className="flex flex-col mx-auto my-auto px-10 py-8 shadow-md rounded-md p-4 space-y-6 text-gray-800">
            
            <div className="flex space-x-2 mx-auto">
                <img src={logo} className="w-10 h-10 my-auto"/>
                <h1 className="text-3xl text-gray-800 font-bold my-auto">BUBBLE</h1>
            </div>

            <div className="flex flex-col text-center mx-auto">
                <h2 className="text-xl font-semibold">Welcome!</h2>
                <p className="text-gray-500">We just need some information to get started.</p>
            </div>

            <div className="flex mx-auto space-x-4">
                <button onClick={() => {handleImageUpload()}}>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{display: "none"}}
                        onChange={handleImageChange}
                    />
                    <div className="absolute flex w-20 h-20 rounded-md bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
                        <CameraFill className="mx-auto my-auto text-white text-3xl"/>
                    </div>
                    <img src={profilePhotoInput ? URL.createObjectURL(profilePhotoInput) : sampleProfilePhoto} className="w-20 h-20 rounded-md hover-md object-contain"/>
                </button>
                <div className="flex h-fit my-auto">
                    <div className="flex bg-gray-100 rounded-l-md w-8">
                        <PersonFill className="text-gray-400 my-auto mx-auto"/>
                    </div>
                    <input 
                        placeholder="Username"
                        className="py-2 pr-2 bg-gray-100 rounded-r-md focus:outline-none font-semibold"
                        onInput={
                            (e: React.ChangeEvent<HTMLInputElement>) => { setUsernameInput(e.target.value); }
                        }
                    />
                </div>
            </div>

            <hr/>

            <div className="flex flex-col space-y-2 mx-auto">

                <div className="flex">
                    <div className="flex bg-gray-100 rounded-l-md w-8">
                        <EnvelopeAtFill className="text-gray-400 my-auto mx-auto"/>
                    </div>
                    <input 
                        placeholder="Email"
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

                <div className="flex">
                    <div className="flex bg-gray-100 rounded-l-md w-8">
                        <Key 
                            className={
                                passwordInput === confirmPasswordInput ?
                                "text-gray-400 my-auto mx-auto" :
                                "text-red-400 my-auto mx-auto"
                            }
                        />
                    </div>
                    <input 
                        placeholder="Confirm Password"
                        type="password"
                        className={passwordInput === confirmPasswordInput ?
                        "py-2 pr-2 bg-gray-100 rounded-r-md focus:outline-none font-semibold" :
                        "py-2 placeholder-red-400 pr-2 bg-gray-100 rounded-r-md focus:outline-none font-semibold"}
                        
                        
                        onInput={
                            (e: React.ChangeEvent<HTMLInputElement>) => { setConfirmPasswordInput(e.target.value); }
                        }
                    />
                </div>

            </div>

            <button 
                className="bg-blue-400 disabled:bg-blue-300 w-fit mx-auto p-2 rounded-md px-4 hover:shadow-md transition-all"
                onClick={
                    () => { handleRegister(); }
                }
                disabled={
                    registerLoading
                    || passwordInput !== confirmPasswordInput
                    || (usernameInput === "" || emailInput === "" || passwordInput === "" || confirmPasswordInput === "")
                }
            >
                <p className="text-white font-semibold">{registerLoading ? "Loading": "Register"}</p>
            </button>

            <div className="flex mx-auto space-x-1">
                <h3 className="text-gray-400">Already have an account?</h3>
                <button className="text-blue-400 font-semibold" onClick={() => navigate("/")}>Log In</button>
            </div>
            
        </div>
    );
}

export default RegisterModal;