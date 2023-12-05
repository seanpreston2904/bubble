import { PersonFill, PersonFillAdd } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

interface UserSearchResultProps {
    name: string,
    photoUrl: string,
    showAddButton: boolean
}

const UserSearchResult: React.FC<UserSearchResultProps> = (props) => {

    const navigate = useNavigate();

    return(
        <div className="flex w-full">
            <button className={`p-2 flex space-x-2 w-full bg-gray-100 ${props.showAddButton ? "rounded-l-md" : "rounded-md"} hover:shadow-md transition-shadow`} onClick={() => navigate(`/account/${props.name}`)}>
                <img src={props.photoUrl} className='w-9 h-9 rounded-md transition-shadow object-cover'/>
                <h4 className="flex-grow text-left text-gray-800 my-auto font-semibold">{props.name}</h4>
            </button>
            {
                props.showAddButton && <button className="bg-blue-400 w-12 rounded-r-md hover:shadow-md transition-all">
                    <PersonFillAdd className="text-white text-xl mx-auto"/>
                </button>
            }
        </div>
        
    );

}

export default UserSearchResult;