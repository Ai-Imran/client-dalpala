import { Link, useLoaderData, useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoArrowBack } from "react-icons/io5";
import { FaCartArrowDown, FaPhone } from "react-icons/fa";
import { useEffect, useState } from 'react';

const SingleProduct = () => {
    const product = useLoaderData();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1); // State to hold the quantity value
    const [errorMessage, setErrorMessage] = useState(""); // State to hold error message
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const name = formData.get('name');
        const number = formData.get('number');
        const address = formData.get('address');
        const email = formData.get('email');

        // Handle form submission logic
    };

    useEffect(() => {
        // Calculate total cost whenever quantity changes
        if (quantity <= 0 || isNaN(quantity)) {
            setErrorMessage("Quantity should be a positive number.");
            document.getElementById('totalCostValue').textContent = '$ 0.00';
        } else {
            const totalCost = (quantity * parseFloat(product?.price)).toFixed(2);
            document.getElementById('totalCostValue').textContent = '$ ' + totalCost;
            setErrorMessage("");
        }
    }, [quantity, product?.price]); // Run the effect whenever quantity or product price changes

    return (
        <div className="border mb-1 px-2">
            <span onClick={goBack}>
                <IoArrowBack className="my-3 text-orange-500 hover:text-lime-500 text-3xl" />
            </span>
            <div className="lg:flex gap-10 mb-2">
                <div className="lg:w-1/2 px-4 mb-5 py-4 bg-stone-200 pt-4">
                    <div className="mx-auto lg:w-[370px]">
                        <ImageGallery items={images} />
                    </div>
                    <div className="flex lg:text-[16px] text-[12px] cursor-pointer mt-1 rounded text-center ">
                        <Link to={'/buy-now'} className="w-1/2 bg-lime-950 py-2 rounded-l text-white flex justify-center items-center">
                            <span className=" ">Add to</span> <FaCartArrowDown className="lg:text-2xl ml-1 text-xl " />
                        </Link>
                        <Link to={'/buy-now'} className="w-1/2 bg-amber-950 py-2 rounded-r text-white">
                            Buy Now
                        </Link>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Product</h2>
                    <div>
                        Name: <span className="text-xl"> {product?.name}</span>
                    </div>
                    <div>
                        Brand: <span className=" font-bold"> {product?.brand}</span>
                    </div>
                    <div>
                        Description: <span className=""> {product?.description}</span>
                    </div>
                    <div>
                        Price: <span className=""> $ {product?.price}</span>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="lg:ml-[300px] px-2 w-full pb-6 mb-10">
                <div className="my-3 mt-8">
                    <label htmlFor="name">Name*</label>
                    <input required className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="text" placeholder="Your Name" name="name" />
                </div>
                <div className="my-3">
                    <label htmlFor="number">Mobile Number*</label>
                    <input required min="0" className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="number" placeholder="Enter Number" name="number" />
                </div>
                <div className="my-3">
                    <label htmlFor="address">Your address*</label>
                    <input required className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="text" placeholder="village/Upazila/Zila" name="address" />
                </div>
                <div className="my-3 ">
                    <label htmlFor="email">Email</label>
                    <input className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="email" placeholder="Enter Email" name="email" />
                </div>
                <h2>Product Name: <span className="text-[20px]"> {product?.name}</span> </h2>
                <div className="my-1">
                    <label htmlFor="quantity">How many <span className="font-bold">{product?.name}</span> do you need? </label>
                    <input id="quantityInput" defaultValue={1} min="1" className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="number" placeholder="Enter quantity" name="quantity" onChange={(e) => setQuantity(parseInt(e.target.value))} />
                </div>
                <div id="totalCost" className="bg-white w-1/2 py-3 px-4 my-3">
                    <h2 className="flex justify-between"> <span>Each Product is Priced at :</span> <span className="text-[18px]">$ {product?.price}</span> </h2>
                    <h2 className="flex justify-between"> <span>Total Cost :</span> <span id="totalCostValue" className="text-[18px]">$ 0.00</span> </h2>
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <input className="block rounded-smborder-lime-400 bg-amber-950 rounded-sm text-white font-bold mb-2 px-3 py-2 lg:w-1/2 w-full" type="submit" value="Submit" />
                <p className="my-1 text-yellow-500">After submitting form You need to Call </p>
                <div className="flex items-center gap-4">
                    <span className="flex text-4xl gap-5"> <FaPhone /> <span>:</span> </span>
                    <div className="">
                        <div>
                            <span className="">Mazrahul Houqe : </span> <span className="font-bold"> 01720132054 </span>
                        </div>
                        <div className="">
                            <span>Md Imran : </span> <span className="font-bold"> 01906951915 </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SingleProduct;
