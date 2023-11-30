import { Outlet } from "react-router-dom";
import Header from "../components/shared/header";

const MainLayout: React.FC = () => {

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