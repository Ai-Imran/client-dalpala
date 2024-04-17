import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
const Main = () => {
    return (
        <div>
            <div className='sticky top-0'>
            <Navbar/>
            </div>
            <div className="max-w-screen-lg mx-auto"><Outlet/></div>
            
        </div>
    );
};

export default Main;