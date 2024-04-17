import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className="max-w-screen-lg mx-auto"><Outlet/></div>
            
        </div>
    );
};

export default Main;