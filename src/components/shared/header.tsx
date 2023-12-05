import { useEffect, useState } from 'react';
import profilePhoto from '../../assets/profile.jpg';
import AccountModal from './accountModal';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../../contexts/userData/userDataHook';
import { auth } from '../../firebase';

const Header: React.FC = () => {

    // Whether to show the account modal when profile button clicked.
    const [showAccountModal, setShowAccountModal] = useState(false);

    const {state} = useUserData();

    /**
     * Handle mouse clicks outside modal area.
     * 
     * @param event Event returned from mouse click.
     */
    const handleClickOutside = (event: MouseEvent) => {

        // Obtain modal and profile photo areas.
        const modal = document.getElementById("accountModal");
        const profilePhoto = document.getElementById("profilePhoto");
        if(!modal || modal.contains(event.target as Node) || profilePhoto!.contains(event.target as Node)){ return; }
        setShowAccountModal(false);
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside) }
    }, [handleClickOutside])

    const navigate = useNavigate();

    console.log(state.userData)

    return(
        <div className="flex flex-col pt-6">
            <div className="flex border-b-[1px] border-b-gray-300 pb-4">
                <button className="flex space-x-2" onClick={() => {navigate("/")}}>
                    <img src={logo} className="w-10 h-10 my-auto"/>
                    <h1 className="text-3xl text-gray-800 font-bold my-auto">BUBBLE</h1>
                </button>
                <div className="flex flex-row-reverse w-full">
                    <button onClick={() => setShowAccountModal(true)} id="profilePhoto">
                        <img src={auth.currentUser?.photoURL!} className='w-12 h-12 my-auto rounded-md hover:shadow-md transition-shadow'/>
                    </button>
                    <h3 className="my-auto text-lg font-semibold mr-4">{auth.currentUser?.displayName}</h3>
                </div>
                {showAccountModal && 
                    <div className="absolute right-0 top-20" id="accountModal">
                        <AccountModal />
                    </div>
                }
            </div>
        </div>
    );

}

export default Header;