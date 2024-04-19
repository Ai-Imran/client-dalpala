import { useLoaderData, useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { IoArrowBack } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";

const SingleProduct = () => {
    const product = useLoaderData();
    const navigate = useNavigate()
    console.log(product);

   
    const goBack = () => {
        navigate(-1); // Assuming you want to go back one step
    };
    const images = [
        {
            original: product.image,
            thumbnail: product.image,
          },
        {
            original: product.image,
            thumbnail: product.image,
          },
        {
            original: product.image,
            thumbnail: product.image,
          },
        
      ];

    //     // Construct the images array dynamically based on the number of images available for the product
    // const images = product.images.map((image) => ({
    //     original: image,
    //     thumbnail: image,
    // }));

    return (
        <div className="border mb-1 px-2">
           <span  onClick={goBack}>
            
           <IoArrowBack className="my-3  text-orange-500 hover:text-lime-500 text-3xl" />
           </span>
          <div className="lg:flex gap-10 mb-2 ">
          <div className="w-1/2 px-4 mb-5 py-4 bg-stone-200 pt-4">
            <div className="mx-auto  lg:w-[370px]">
           <ImageGallery  items={images} />
            </div>
            <div className="flex  lg:text-[16px]  text-[12px] cursor-pointer mt-1 rounded  text-center ">
                           <div className="lg:w-1/2 bg-lime-950 py-2 rounded-l text-white flex justify-center items-center">
                             <span className=" ">Add to</span> <FaCartArrowDown className="lg:text-2xl ml-1 text-xl " /> 
                             </div>
                            <div className="w-1/2 bg-amber-950 py-2 rounded-r text-white">Buy Now</div>
                           </div>
           </div>
           <div>
            <h2 className="text-xl font-bold">Product</h2>
           <div>
             Name :  <span className="text-xl"> {product?.name}</span>
           </div>
           <div>
             Brand :  <span className=" font-bold"> {product?.brand}</span>
           </div>
           <div>
           Description :  <span className=""> {product?.description}</span>
           </div>
           <div>
           Price :  <span className=""> $ {product?.price}</span>
           </div>
           </div>
          </div>
        </div>
    )
}

export default SingleProduct;