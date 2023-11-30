import { useState } from 'react';
import profilePhoto from '../../assets/profile.jpg';
import AccountModal from './accountModal';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {

    // Whether to show the account modal when profile button clicked.
    const [showAccountModal, setShowAccountModal] = useState(false);

    const navigate = useNavigate();

    return(
        <div className="flex flex-col pt-6">
            <div className="flex border-b-[1px] border-b-gray-300 pb-4">
                <button className="flex space-x-2" onClick={() => {navigate("/")}}>
                    <img src={logo} className="w-10 h-10 my-auto"/>
                    <h1 className="text-3xl text-gray-800 font-bold my-auto">BUBBLE</h1>
                </button>
                <div className="flex flex-row-reverse w-full">
                    <button onClick={() => setShowAccountModal(!showAccountModal)}>
                        <img src={profilePhoto} className='w-12 h-12 my-auto rounded-md hover:shadow-md transition-shadow'/>
                    </button>
                </div>
                {showAccountModal && <AccountModal/>}
            </div>
        </div>
    );

}

export default Header;