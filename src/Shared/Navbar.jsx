import { Link, NavLink } from 'react-router-dom';
import './style.css'
import dalpala from '../assets/dal1.png'
import { FaSearch, FaUser } from "react-icons/fa";
import { RiMenuFoldLine } from "react-icons/ri";
import SearchButton from '../Components/SearchButton';

const Navbar = () => {
    return (
        <div>
            <div className="navbar lg:py-4 text-white lg:flex bg-[#4cd137] lg:px-10">
                <div className="navbar-start  ">

                <div className="drawer  pl-2 lg:hidden">
             <input id="my-drawer" type="checkbox" className="drawer-toggle" />
             <div className="drawer-content">
               {/* Page content here */}
               <label htmlFor="my-drawer" className=" drawer-button">
               <RiMenuFoldLine className='text-4xl' />

               </label>
             </div> 
             <div className="drawer-side">
               <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
               <ul className="menu font-bold pt-8 text-[18px] space-y-8 text-white p-4 w-3/4 min-h-full bg-[#4cd137]  ">
                 {/* Sidebar content here */}
                 <NavLink to={'/'}>Home</NavLink>
                 <NavLink to={'/shops'}>Shop Now</NavLink>
                 <NavLink to={'/login'}>Login</NavLink>
                 <NavLink to={'/signin'}>Create Account</NavLink>
                 <NavLink to={'/contact'}>Contact Us</NavLink>

          </ul>
             </div>
            </div>
              <Link to={'/'} className='flex  gap-2  items-center '> 
                    <img className='w-[50px] opacity-65' src={dalpala} alt="dalapla-logo" />
                    <h1 className='font-bold hover:text-lime-200 lg:text-3xl text-2xl'>Dalpala</h1>
                    </Link> 
                              
                </div>
                <SearchButton/>
                <div className="lg:hidden gap-2 flex ml-[70px]">
                <FaUser className='text-2xl'/>   
                <div className=' flex font-bold flex-col'>
                <Link className='underline' to={'/login'}>Login</Link> 
                <Link className='underline' to={'/signin'}>Register</Link>
                </div> 
                </div>
                
                <div className="navbar-center  hidden lg:flex">                   
                    <ul className="menu  font-bold text-[18px] space-x-4 px-4 menu-horizontal">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/shops'}>Shop Now</NavLink>
                        <NavLink to={'/login'}>Login</NavLink>
                        <NavLink to={'/signin'}>Create Account</NavLink>
                        <NavLink to={'/contact'}>Contact Us</NavLink>
                    </ul>
                </div>

            </div>
            
        </div>
    );
};

export default Navbar;