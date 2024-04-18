import { FaSearch,  } from "react-icons/fa"

const ProductSearch = () => {

    return (
        <div className="flex items-center pl-3 pt-3 pb-2  bg-gray-700 lg:hidden">
        <label className=" flex  items-center bg-lime-700 pr-4 rounded-r-md gap-2">
              <input type="text" className="outline-none w-[300px] px-2 py-2 rounded rounded-r-none focus:border-lime-300 focus:border-2  text-black" placeholder='Search product' />
              <FaSearch className='ml-1 border-lime-700 text-lime-200 text-2xl'/>
         </label>
        
     </div>
    )
}
export default ProductSearch