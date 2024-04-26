import  { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { FaCartArrowDown, FaSearch } from 'react-icons/fa';
import tshirt from '../../assets/tshirt.jpg'
import shoes from '../../assets/shoes.jpg'
import  eyglass from '../../assets/eyglass.jpg'
import girlshoes from '../../assets/girl-shoes.jpg'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
                setFilteredProducts(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const filterByBrand = (brand) => {
        const filtered = products.filter(product =>
            product.brand === brand
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>Low Price | High Quality</title>
            </Helmet>

            <div className="bg-[#182C61] px-4 lg:rounded-lg lg:py-3 py-2">
                <label className="lg:w-1/2 mx-auto text-center  flex  items-center bg-blue-700 pr-4 rounded-r-md gap-2">
                    <input
                        type="text"
                        className="outline-none w-[300px] xl:w-[500px] px-2 py-2 rounded rounded-r-none focus:border-blue-700 focus:border-2 text-black"
                        placeholder='Search product'
                        value={searchTerm}
                        onChange={handleSearch}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch(e);
                            }
                        }}
                    />
                    <FaSearch className=' border-blue-700 ml-2 text-2xl' />
                </label>
            </div>

           <div className="overflow-x-auto">
           <div className="flex text-[9px] font-bold my-1 w-[1000px]  justify-start  px-2 gap-2 lg:gap-8 ">      
                <div className=" " onClick={() => filterByBrand('Brand D')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded border  border-blue-500" src={tshirt} alt="" /> <p className="">bang ladesh</p>                  
                </div>
                <div className=" " onClick={() => filterByBrand('Brand D')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded border  border-blue-500" src={tshirt} alt="" />  <p className="text-[9px] font-bold">bang ladesh</p>                
                </div>
                <div className=" " onClick={() => filterByBrand('Brand D')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded border  border-blue-500" src={girlshoes} alt="" />                  
                </div>
                <div className=" " onClick={() => filterByBrand('Brand D')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded border  border-blue-500" src={tshirt} alt="" />                  
                </div>
                <div className=" " onClick={() => filterByBrand('Brand D')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded border  border-blue-500" src={girlshoes} alt="" />                  
                </div>
                <div className=" " onClick={() => filterByBrand('Brand D')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded border  border-blue-500" src={girlshoes} alt="" />                  
                </div>
                <div className=" " onClick={() => filterByBrand('Brand D')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded border  border-blue-500" src={tshirt} alt="" />                  
                </div>
                <div className=" " onClick={() => filterByBrand('Brand D')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded border  border-blue-500" src={tshirt} alt="" />                  
                </div>
                <div className=" " onClick={() => filterByBrand('Brand D')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded border  border-blue-500" src={tshirt} alt="" />                  
                </div>
                <div className=" " onClick={() => filterByBrand('Brand D')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded border  border-blue-500" src={tshirt} alt="" />                  
                </div>
                <div className=" " onClick={() => filterByBrand('Brand D')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded border  border-blue-500" src={tshirt} alt="" />                  
                </div>
                <div className=" " onClick={() => filterByBrand('Brand D')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded border  border-blue-500" src={tshirt} alt="" />                  
                </div>
               
            </div>
           </div>

            <div className="">
                <div className="grid items-center  px-4  lg:gap-6 gap-3 bg-gray-100 grid-cols-2 lg:grid-cols-3">
                    {loading ? (
                        <span className="loading mx-auto lg:mt-[250px] text-center lg:mt-1/2 lg:ml-80 loading-dots loading-lg"></span>
                    ) : (
                        filteredProducts.length === 0 ? (
                            <div className="text-center text-red-500  mt-4">
                            Your product cannot be found.
                          </div>
                        ) : (
                            filteredProducts.slice(0, 10).map(product => (
                                <div className="hover:text-black bg-white" key={product._id}>
                                    {/* Your product card JSX */}
                                    <div className="hover:shadow-xl hover:border hover:border-lime-400 focus:shadow-xl ">
                                        <figure><img className="lg:h-[300px] h-[200px] bg-gray-200 w-full rounded-t-lg" src={product.image} alt={product?.name} /></figure>
                                        <div className="mt-4 space-y-4">
                                            <div className="px-2">
                                                <h2 className="card-title lg:text-[20px] font-bold text-[14px]">{product?.name}</h2>
                                                <p className="lg:text-[16px] text-[12px]">{product?.description.split(' ').slice(0, 7).join(' ')}...<Link to={`/single-shop/${product._id}`} className="underline hover:text-lime-600">See more</Link> </p>
                                                <div className="lg:flex gap-4">
                                                    <p className="lg:text-[16px] text-[13px]">  Price : {product?.price} </p>
                                                    <p className="lg:text-[16px] text-[12px]">Brand : <span className="font-bold">{product?.brand}</span></p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="w-full">
                                                    <Link className="block bg-indigo-950 text-white text-center lg:text-[16px] text-[13px] py-2 rounded" to={`/single-shop/${product._id}`}>See Details</Link>
                                                </div>
                                                <div className="flex lg:text-[16px] text-[12px] cursor-pointer mt-1 rounded text-center ">
                                                    <Link to={`/single-shop/${product._id}`} className="lg:w-1/2 bg-lime-950 py-2 rounded-l text-white flex items-center">
                                                        <span className="lg:ml-8 ml-2">Add to</span>
                                                        <FaCartArrowDown className="lg:text-2xl text-xl mr-2 mx-1" />
                                                    </Link>
                                                    <Link to={`/single-shop/${product._id}`} className="w-1/2 bg-amber-950 py-2 rounded-r text-white">
                                                        Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    )}
                </div>
                {filteredProducts.length > 0 && (
                    <Link className="block mx-4 bg-indigo-950 lg:w-1/3 mb-3 lg:mx-auto text-white text-center lg:text-[16px] text-[13px] py-2 rounded" to={`/shops`}>Show More</Link>
                )}
            </div>
        </div>
    );
};

export default Home;
