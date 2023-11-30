const PostComment: React.FC = () => {

    return(
        <div className="flex space-x-3 p-2 bg-gray-100 rounded-md">
            <img className="w-7 h-7 rounded-full shadow-md" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAQwabSLtODiAjX89Sq9gZHJzRGHJIggfHcNGjws&s"}/>
            <p>This is a test to see how text flows on this. Will it wrap onto the next line? YES! IT DOES IT PROPERLY</p>
        </div>
    );

}

export default PostComment;