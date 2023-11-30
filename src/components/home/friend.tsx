import { useNavigate } from "react-router-dom";

interface FriendProps {
    name: string,
    photoUrl: string
}

const Friend: React.FC<FriendProps> = (props) => {

    const navigate = useNavigate();

    return(
        <button className="p-2 flex space-x-2 w-full bg-gray-100 rounded-md hover:shadow-md transition-shadow" onClick={() => navigate(`/account/${props.name}`)}>
            <img src={props.photoUrl} className='w-9 h-9 rounded-md transition-shadow object-cover'/>
            <h4 className="text-gray-800 my-auto font-semibold">{props.name}</h4>
        </button>
    );

}

export default Friend;