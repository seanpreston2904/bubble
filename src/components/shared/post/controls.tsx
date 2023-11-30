import { HandThumbsUp } from "react-bootstrap-icons";

const Controls: React.FC = () => {

    return(
        <div className="flex h-10 absolute bottom-2 right-2 p-2 backdrop-blur-md rounded-md">
            <button className="flex space-x-2">
                <HandThumbsUp className="text-white text-lg my-auto"/>
                <h3 className="text-white font-semibold">42</h3>
            </button>
        </div>
    );

}

export default Controls;