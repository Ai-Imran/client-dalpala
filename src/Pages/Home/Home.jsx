import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import './style.css'
import Shpos from "../Shops/Shpos";
import { Helmet } from "react-helmet-async";


const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Low Price | High Quality</title>
            </Helmet>
             <div className="flex items-center pl-2 gap-4 bg-gray-700 lg:hidden">
                <label className=" flex items-center bg-lime-700 pr-4 rounded-r-md gap-2">
                      <input type="text" className="outline-none px-2 py-2 rounded rounded-r-none focus:border-lime-300 focus:border-2 w-[230px] text-black" placeholder='Search product' />
                      <FaSearch className='ml-1 border-lime-700 text-lime-200 text-2xl'/>
                 </label>
                 <div className="">
                 <FaShoppingBag className="text-4xl text-lime-300 pt-1"/>
                 {/* <div className="badge w-[35px] relative -top-6 left-5">+99</div> */}
                 <div className="badge w-[35px] text-white border-lime-300 bg-gray-500 relative -top-7 left-6">+99</div>
                 </div>
             </div>
             <h3 className="lg:text-4xl rounded-2xl font-bold text-center mx-auto bg-gray-800 text-white py-3 lg:mt-4 lg:py-4">All Your Products are Here</h3>

             <div>
                <Shpos/>
             </div>

        </div>
    );
};

export default Home; 