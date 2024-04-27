import { useEffect, useState } from "react";
import { FaFacebook,  FaWhatsapp } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const BuyProduct = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Assuming you want to go back one step
    };
    const [showBanglaText, setShowBanglaText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowBanglaText(true);
        }, 5000);
    
        return () => clearTimeout(timer);
      }, []); 


    return (
        <div className="px-4 min-h-screen">
            <span onClick={goBack}>
                <IoArrowBack className="my-1  text-orange-500 hover:text-lime-500 text-3xl" />
            </span>
            <div className="mx-auto flex lg:w-1/2 items-center my-3">
      {!showBanglaText && (
        <div className="flex gap-4 justify-center items-center">
          <p className="font-bold">Your Product is Pending</p>
          <div className="animate-spin w-10 ml-4 my-2 border-8 border-dotted rounded-full p-4 border-lime-600"></div>
        </div>
      )}
      {showBanglaText && (
        <p className="mx-1 w-11/12 text-[14px] lg:text-[16px]">
          
          আপনার অর্ডার টি সম্পন্ন হয়েছে। <span className="text-red-400"> যদি এখনই নিতে চান তাহলে নিচের
          দেয়া নাম্বারে কল করুন অথবা ফেসবুকে মেসেজ করুন।</span> <br /> আমরা আপনার অর্ডারটি
          পেয়েছি। ৪৮ ঘন্টার মধ্যে আপনাকে জানিয়ে দেয়া হবে এবং আপনার শর্ত অনুযায়ী
          পণ্যটি পাঠিয়ে দেয়া হবে।
        </p>
      )}
    </div>
           

            <div className="lg:w-1/2 mx-2 lg:mx-auto min-h-screen">
                <div>
                    <p>You are already ordered a Product.</p> <p>
                        Please confirm order to <Link className="text-lime-500 underline" to={'/contact'}>contact us</Link>.
                    </p>Payment method like Bkash,Nagod,Roket or Bank your have any confusion  found please  <Link className="text-lime-500 underline" to={'/contact'}>contact us</Link> as soon as possible.
                </div>
                <div className="divider w-11/12 divider-success"> OR Contact Us</div>
                <div className="flex py-3 w-11/12 lg:text-xl">
                    <span className="flex justify-center items-center gap-3">Mazhroul Hoque <IoArrowForward className="text-green-400 " /> </span>
                    <div className="flex ml-4 lg:gap-4 gap-2">
                        <span>01740843109</span>
                        <FaWhatsapp className="lg:text-3xl" />
                        <a target="_blank" href="https://www.facebook.com/mazharul.hoque.homna?mibextid=ZbWKwL"> <FaFacebook className="lg:text-3xl" /></a>

                        <MdEmail className="lg:text-3xl" />
                    </div>
                </div>
                <div className="flex w-11/12 py-3 mx-2 lg:text-xl">
                    <span className="flex justify-center items-center gap-3">Md Imran <IoArrowForward className="text-green-400 " /> </span>
                    <div className="flex  ml-4 gap-4">
                        <span>01906951915</span>
                        <FaWhatsapp className="lg:text-3xl text-[]" />
                        <a target="_blank" href="https://www.facebook.com/imran.chowdhury.90663894"> <FaFacebook className="lg:text-3xl" /></a>

                        <MdEmail className="lg:text-3xl" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BuyProduct;