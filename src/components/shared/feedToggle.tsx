import { useState } from "react";

const FeedToggle: React.FC = () => {

    // State for toggling between tabs
    const [toggleState, setToggleState] = useState("friends");

    return(
        <div className="flex space-x-4 items-start mx-auto">
            <button onClick={() => {setToggleState("friends")}}>
                <h3 className={`text-lg font-semibold text-gray-800 ${(toggleState === "friends") && "border-b-2"} border-b-gray-800`}>FRIENDS</h3>         
            </button>
            <button onClick={() => {setToggleState("forYou")}}>
                <h3 className={`text-lg font-semibold text-gray-800  ${(toggleState === "forYou") && "border-b-2"} border-b-gray-800`}>FOR YOU</h3>
            </button>
        </div>
    );
}

export default FeedToggle;