import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Main = () => {
    return (
        <div>
            {/* Navbar fixed at the top */}
            <div className='fixed top-0 mx-auto z-50'>
                <Navbar/>
            </div>
            
            {/* Content scrolls underneath the Navbar */}
            <div className="max-w-screen-lg mx-auto mt-32"> {/* Add margin-top to make space for the fixed Navbar */}
                <Outlet/>
            </div>
        </div>
    );
};

export default Main;
