import Controls from "./controls";
import UserLink from "./userLink";

const Post: React.FC = () => {
    
    return(
        <div className="rounded-md shadow-md w-[30rem] flex flex-col">
            <div 
                style={{
                    backgroundImage: `url("https://fs.npstatic.com/userfiles/7682239/image/nextpit_apple_iphone_15_pro_max_hands_on_photo_day_7.2-w1920.JPEG")`,
                    backgroundSize: 'cover'
                }}
                className="h-96 rounded-t-md p-2 relative"
            >
                <UserLink/>
                <Controls/>
            </div>
            <div className="flex flex-col p-3">
                <div className="flex space-x-3 p-2 bg-gray-100 rounded-md">
                    <img className="w-7 h-7 rounded-full shadow-md" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAQwabSLtODiAjX89Sq9gZHJzRGHJIggfHcNGjws&s"}/>
                    <p className="text-gray-800">This is a test to see how text flows on this. Will it wrap onto the next line? YES! IT DOES IT PROPERLY</p>
                </div>
            </div>
        </div>
    );

}

export default Post;