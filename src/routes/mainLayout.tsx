import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/shared/header";
import { auth } from "../firebase";

const MainLayout: React.FC = () => {

    const navigate = useNavigate();

    if(auth.currentUser === null){ navigate("/") }

    return(
        <div className='flex flex-col px-6 space-y-6'>
            <div className='sticky z-10 top-0 w-full bg-white'>
                <Header/>
            </div>
            <Outlet/>
        </div>
    );

}

export default MainLayout;