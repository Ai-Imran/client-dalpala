import { FaSearch } from "react-icons/fa";

const SearchButton = () => {

    return (
       
            <div className="">
                <label className="hidden lg:flex  items-center bg-blue-700 pr-4 rounded-r-md gap-2">
                      <input type="text" className="outline-none xl:w-[350px] px-2 py-2 rounded rounded-r-none focus:border-blue-700 focus:border-2 text-black" placeholder='Search product' />
                      <FaSearch className='ml-1 border-blue-700 text-2xl'/>
                 </label>
             </div>
       
    )
}

export default SearchButton;