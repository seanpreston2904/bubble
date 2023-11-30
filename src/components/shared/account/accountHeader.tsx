import { Plus } from 'react-bootstrap-icons';
import profilePhoto from '../../../assets/profile.jpg';

const AccountHeader: React.FC = () => {

    return(
        <div className="flex space-x-4 mx-auto mt-6 mb-6">
            <img src={profilePhoto} className='w-28 h-28 my-auto rounded-md shadow-md transition-shadow'/>
            <div className="flex flex-col my-auto">
                <h2 className="font-semibold text-2xl">Sean.Preston</h2>
                <h5>4,193 Followers</h5>
                <div>
                    <button className="flex mt-2 bg-blue-400 pl-1 pr-3 py-1 rounded-md hover:shadow-md transition-shadow font-semibold text-white">
                        <Plus className="my-auto text-2xl"/>
                        <p>ADD FRIEND</p>
                    </button>
                </div>
            </div>
        </div>
    );

}

export default AccountHeader;