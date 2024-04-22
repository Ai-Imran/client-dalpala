import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Main = () => {
    return (
        <div className='bg-green-50 lg:pt-10'>
            {/* Navbar fixed at the top */}
            <div className='fixed w-full lg:px-8 left-0  top-0 text-center z-50'>
                <Navbar/>
            </div>
            
            {/* Content scrolls underneath the Navbar */}
            <div className="max-w-screen-lg mt-[62px] mx-auto  lg:mt-[35px]"> {/* Add margin-top to make space for the fixed Navbar */}
                <Outlet/>
            </div>
        </div>
    );
};

export default Main;
