import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Main = () => {
    return (
        <div className='bg-green-50 lg:pt-10'>
            {/* Navbar fixed at the top */}
            <div className='fixed lg:px-8 lg:m top-0 text-center mx-auto z-50'>
                <Navbar/>
            </div>
            
            {/* Content scrolls underneath the Navbar */}
            <div className="max-w-screen-lg  mx-auto mt-[64px] lg:mt-32"> {/* Add margin-top to make space for the fixed Navbar */}
                <Outlet/>
            </div>
        </div>
    );
};

export default Main;
