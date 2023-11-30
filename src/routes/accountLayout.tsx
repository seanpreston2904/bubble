import AccountHeader from "../components/shared/account/accountHeader";
import Post from "../components/shared/post/post";

const AccountLayout: React.FC = () => {

    return(
        <div className="flex flex-col mx-auto space-y-6">
            <AccountHeader/>
            <div className="flex flex-col space-y-4">
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );

}

export default AccountLayout;