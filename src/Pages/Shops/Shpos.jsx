import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import useProducts from "../../Hooks/useProducts";
import { Link } from "react-router-dom";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";

import tshirt from '../../assets/tshirt.jpg'
import shoes from '../../assets/shoes.jpg'
import  eyglass from '../../assets/eyglass.jpg'
import girlshoes from '../../assets/girl-shoes.jpg'

const Shpos = () => {
  const [products, loading] = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Function to filter products by brand
  const filterByBrand = (brand) => {
    const filtered = products.filter((product) => product.brand === brand);
    setFilteredProducts(filtered);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const term = e.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    // Filter initially by "Brand A" when component mounts
    filterByBrand("Brand A");
  }, [products]); // Make sure to include products as a dependency

  return (
    <div className="mb-2 min-h-screen">
      <Helmet>
        <title> Dalpala | Low Price | High Quality</title>
      </Helmet>

      <div className="bg-gray-700 px-4 lg:rounded-lg lg:py-3 py-2">
        <label className="lg:w-1/2 mx-auto text-center  flex  items-center bg-blue-700 pr-4 rounded-r-md gap-2">
          <input
            type="text"
            className="outline-none w-[300px] xl:w-[500px] px-2 py-2 rounded rounded-r-none focus:border-blue-700 focus:border-2 text-black"
            placeholder="Search product"
            value={searchTerm}
            onChange={handleSearch}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(e);
              }
            }}
          />
          <FaSearch className="border-blue-700 ml-2 text-2xl" />
        </label>
      </div>

      <div className="flex mt-3 overflow-x-auto gap-3 lg:gap-8">
                <div className="grid " onClick={() => filterByBrand('Brand A')}>
                    <img className="lg:w-16 w-14 hover:border-red-500 rounded-full border-4 p-1 border-lime-500" src={tshirt} alt="" />
                    <p className="text-center">T Shirt</p>
                </div>
                <div className="grid " onClick={() => filterByBrand('Brand B')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded-full border-4 p-1 border-lime-500" src={shoes} alt="" />
                    <p className="text-center">Shows</p>
                </div>
                <div className="grid " onClick={() => filterByBrand('Brand C')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded-full border-4 p-1 border-lime-500" src={girlshoes} alt="" />
                    <p className="text-center">Girl Shows</p>
                </div>
                <div className="grid " onClick={() => filterByBrand('Brand D')}>
                <img className="lg:w-16 w-14 hover:border-red-500 rounded-full border-4 p-1 border-lime-500" src={eyglass} alt="" />
                    <p className="text-center">Eye Glass</p>
                </div>
            </div>

      {loading ? (
        <span className="loading mx-auto lg:mt-[250px] text-center lg:mt-1/2 lg:ml-80 loading-dots loading-lg"></span>
      ) : (
        <>
          {filteredProducts.length === 0 ? (
            <div className="text-center  text-red-500 mt-4">
              Your product cannot be found.
            </div>
          ) : (
            <div className="grid items-center border px-4 py-4 lg:gap-6 gap-3 bg-gray-100 grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="hover:shadow-xl hover:border hover:border-lime-400 focus:shadow-xl "
                >
                  <figure>
                    <img
                      className="lg:h-[300px] h-[200px] bg-gray-200 w-full rounded-t-lg"
                      src={product.image}
                      alt={product?.name}
                    />
                  </figure>
                  <div className="mt-4 space-y-4">
                    <div className="px-2 ">
                      <h2 className="card-title lg:text-[20px] font-bold text-[14px]">
                        {product?.name}
                      </h2>
                      <p className="lg:text-[16px] text-[12px]">
                        {product?.description
                          .split(" ")
                          .slice(0, 7)
                          .join(" ")}
                        ...
                        <Link
                          to={`/single-shop/${product._id}`}
                          className="underline hover:text-lime-600"
                        >
                          See more
                        </Link>{" "}
                      </p>

                      <div className="lg:flex gap-4">
                        <p className="lg:text-[16px] text-[13px]">
                          Price : {product?.price}{" "}
                        </p>
                        <p className="lg:text-[16px] text-[12px]">
                          Brand :{" "}
                          <span className="font-bold">{product?.brand}</span>
                        </p>
                      </div>
                    </div>

                    <div className=" ">
                      <div className="w-full">
                        <Link
                          className="block bg-indigo-950 text-white text-center lg:text-[16px] text-[13px] py-2 rounded"
                          to={`/single-shop/${product._id}`}
                        >
                          See Details
                        </Link>
                      </div>
                      <div className="flex  lg:text-[16px] text-[12px] cursor-pointer mt-1 rounded  text-center ">
                        <Link
                          to={"/buy-now"}
                          className="lg:w-1/2 bg-lime-950 py-2 rounded-l text-white flex items-center"
                        >
                          {" "}
                          <span className="lg:ml-8 ml-2">Add to</span>{" "}
                          <FaCartArrowDown className="lg:text-2xl text-xl mr-2 mx-1" />{" "}
                        </Link>
                        <Link
                          to={"/buy-now"}
                          className="w-1/2 bg-amber-950 py-2 rounded-r text-white"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Shpos;
