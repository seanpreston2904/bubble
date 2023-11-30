import { Search } from "react-bootstrap-icons";
import Friend from "../components/home/friend";
import FeedToggle from "../components/shared/feedToggle";
import Post from "../components/shared/post/post";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useUserData } from "../contexts/userData/userDataHook";

const HomeLayout: React.FC = () => {

    // Stores the filtered results of searching for friends.
    const [searchResults, setSearchResults] = useState<{name: string, imageUrl: string}[] | null>(null);

    // Use user data state
    const {state} = useUserData();

    // Temporary storage for a users friends (will eventually be moved to state, which can be populated upon authentication)
    const [friends] = useState(
        [
            {
                name: "Dan.Greyson",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUje-Ru5i8-4NDTEpH17DCA1_PKZA7GEnIdFuHR4&s"
            },
            {
                name: "Steven2001",
                imageUrl: "https://images.unsplash.com/profile-fb-1527368999-01bec71421e9.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            {
                name: "JackAttack",
                imageUrl: "https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg"
            },
        ]
    );

    // If user is not logged in - force them to login page.
    if(!state.isAuthenticated){ return <Navigate to="/login"/> }

    return(
        <div className="flex relative">
            <div className="flex flex-col flex-grow space-y-7">
                <FeedToggle/>
                <div className="mx-auto space-y-4">
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
            <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">MY FRIENDS</h3>
                <div className="flex w-64">
                    <div className="flex rounded-l-md bg-gray-100 px-3">
                        <Search className="my-auto text-gray-400"/>
                    </div>
                    <input
                        className="bg-gray-100 w-full rounded-r-md py-2 focus:outline-none"
                        placeholder="Search Friends"
                        onInput={
                            (e: React.ChangeEvent<HTMLInputElement>) => {

                                // Search friends list.
                                const result = friends.filter(
                                    friend => friend.name.toLowerCase().includes(e.target.value.toLowerCase())
                                );

                                // Set search results.
                                setSearchResults(result);
                            
                            }
                        }
                    />
                </div>
                
                <div className="flex flex-col space-y-2 overflow-y-auto pb-2">
                {

                    // ChatGPT decided that chained ternary staements are readable...

                    // Could I have asked ChatGPT to make this more human readable? Sure...

                    // But why would I give AI even more opportunity to take over my job
                    // when I can instead complain about it spitting out "shit code" -
                    // despite me being an average as fuck React/TypeScript developer...

                    searchResults !== null ? (
                        searchResults.length > 0 ? (
                            searchResults.map(friend => (
                                <Friend key={friend.name} name={friend.name} photoUrl={friend.imageUrl} />
                            ))
                        ) : (
                            <div className="flex flex-col w-full">
                                <p className="mx-auto font-semibold">No Friends Found!</p>
                            </div>
                        )
                    ) : ( friends.map(friend => (
                                <Friend key={friend.name} name={friend.name} photoUrl={friend.imageUrl} />
                            )
                        )
                    )

                }
                </div>
            </div>
        </div>
        
    );

}

export default HomeLayout;