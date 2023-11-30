const UserLink: React.FC = () => {

    return(
        <div className="flex">
            <img className="rounded-l-md w-9" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAQwabSLtODiAjX89Sq9gZHJzRGHJIggfHcNGjws&s"}/>
            <button className="flex backdrop-blur-md px-3 bg-gray-400/50 rounded-r-md">
                <h3 className="text-white font-semibold my-auto">Dan.Greyson</h3>
            </button>
        </div>
    );

}

export default UserLink;