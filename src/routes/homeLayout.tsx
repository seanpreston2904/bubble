import { Search } from "react-bootstrap-icons";
import FeedToggle from "../components/shared/feedToggle";
import Post from "../components/shared/post/post";
import { useState } from "react";
import { useUserData } from "../contexts/userData/userDataHook";
import UserSearchResult from "../components/home/userSearchResult";

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

    // Temporary storage for other users (will eventually be moved to state, which can be populated upon not finding any friends)
    const [otherUsers] = useState(
        [
            {
                name: "Barry554",
                imageUrl: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGV8ZW58MHx8MHx8fDA%3D"
            },
            {
                name: "TheTotalTerry",
                imageUrl: "https://img.mensxp.com/media/content/2020/May/Girl-Uses-Fake-Guy-Profile-To-Test-Friends-Character3_5eb954b01d688.jpeg"
            },
            {
                name: "Jamie95Paulson",
                imageUrl: "https://christophertoddstudios.com/wp-content/uploads/2022/11/MarcyM-Headshot-111-683x1024.jpeg"
            },
        ]
    );

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
                                <UserSearchResult key={friend.name} name={friend.name} photoUrl={friend.imageUrl} showAddButton={false}/>
                            ))
                        ) : (
                            <div className="flex flex-col w-full space-y-2 text-gray-800">
                                <p className="mx-auto font-semibold">No Friends Found!</p>
                                <hr/>
                                <p className="mx-auto font-semibold">Other Users</p>
                                <div className="flex flex-col space-y-2">
                                {
                                    otherUsers.map(
                                        user => <UserSearchResult key={user.name} name={user.name} photoUrl={user.imageUrl} showAddButton={true}/>
                                    )
                                }
                                </div>
                            </div>
                        )
                    ) : ( friends.map(friend => (
                                <UserSearchResult key={friend.name} name={friend.name} photoUrl={friend.imageUrl} showAddButton={false}/>
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