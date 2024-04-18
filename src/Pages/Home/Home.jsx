
import './style.css'
// import Shpos from "../Shops/Shpos";
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';
import useProducts from '../../Hooks/useProducts';


const Home = () => {
    const [products] = useProducts()

    
    return (
        <div>
            <Helmet>
                <title>Low Price | High Quality</title>
            </Helmet>
          
             <h3 className="lg:text-4xl lg:rounded-2xl font-bold text-center mx-auto bg-gray-800 text-white  py-1 hidden lg:mt-4 lg:py-4">All Your Products are Here</h3>

             {/*  */}
             <div className=" lg:mt-10">
                {/* <Shpos/> */}
                <div className="grid items-center border px-4 py-4 lg:gap-6 gap-3 bg-gray-100 grid-cols-2 lg:grid-cols-3">
                {
                    products.slice(0,10).map(product => <div className="hover:text-black bg-white"  key={product.Product_id}>
                        <div className="hover:shadow-xl hover:border hover:border-lime-400 focus:shadow-xl ">
                        <figure><img className="lg:h-[300px] h-[200px] bg-gray-200 w-full rounded-t-lg" src={product.image} alt={product?.name} /></figure>
                        <div className="mt-4 space-y-4">
                         <div className="px-2 ">
                         <h2 className="card-title lg:text-[20px] font-bold text-[14px]">{product?.name}</h2>
                          <p className="lg:text-[16px] text-[12px]">{product?.description.split(' ').slice(0, 7).join(' ')}...<Link to={'/single-shop'} className="underline hover:text-lime-600">See more</Link> </p>

                          <div className="lg:flex gap-4">
                          <p className="lg:text-[16px] text-[13px]">Price : {product?.price} </p>
                          <p className="lg:text-[16px] text-[12px]">Brand : <span className="font-bold">{product?.brand}</span></p>
                         </div>
                          </div>
                          
                          <div className=" ">
                          <div className="w-full">
                           <Link className="block bg-indigo-950 text-white text-center lg:text-[16px] text-[13px] py-2 rounded" to={'/single-shop'}>See Details</Link>
                           </div>
                           <div className="flex  lg:text-[16px] text-[12px] cursor-pointer mt-1 rounded  text-center ">
                           <div className="lg:w-1/2 bg-lime-950 py-2 rounded-l text-white flex items-center"> <span className="lg:ml-8 ml-2">Add to</span> <FaCartArrowDown className="lg:text-2xl text-xl mr-2 mx-1" /> </div>
                            <div className="w-1/2 bg-amber-950 py-2 rounded-r text-white">Buy Now</div>
                           </div>
                          </div>
                        </div>
                    </div>
                    </div>)
                }
            </div>
            <Link className="block mx-4 bg-indigo-950 lg:w-1/3 mb-3 lg:mx-auto text-white text-center lg:text-[16px] text-[13px] py-2 rounded" to={'/shops'}>Show More</Link>
             </div>

        </div>
    );
};

export default Home; 