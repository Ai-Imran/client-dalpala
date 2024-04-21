import { FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const BuyProduct = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Assuming you want to go back one step
    };


    return (
        <div>
            <span onClick={goBack}>
                <IoArrowBack className="my-1  text-orange-500 hover:text-lime-500 text-3xl" />
            </span>
           <div className="w-1/2 mx-auto">
            <div>
            <p>You are already ordered a Product.</p> <p>
            Please confirm order to <Link className="text-lime-500 underline" to={'/contact'}>contact us</Link>.
                </p>Payment method like Bkash,Nagod,Roket or Bank your have any confusion  found please  <Link className="text-lime-500 underline" to={'/contact'}>contact us</Link> as soon as possible. 
            </div>
            <div className="divider divider-success"> OR Contact Us</div>
            <div className="flex py-3 lg:text-xl">
                <span className="flex justify-center items-center gap-3">Mazhroul Hoque <IoArrowForward className="text-green-400 "/> </span>
                <div className="flex  ml-4 gap-4">
                    <span>01740843109</span>
                    <FaWhatsapp className="text-3xl"/>
                    <FaFacebook className="text-3xl"/>
                       <MdEmail className="text-3xl"/>
                </div>
            </div>
            <div className="flex py-3 lg:text-xl">
                <span className="flex justify-center items-center gap-3">Md Imran <IoArrowForward className="text-green-400 "/> </span>
                <div className="flex  ml-4 gap-4">
                    <span>01906951915</span>
                    <FaWhatsapp className="text-3xl"/>
                    <FaFacebook className="text-3xl"/>
                       <MdEmail className="text-3xl"/>
                </div>
            </div>
           </div>
           

        </div>
    )
}

export default BuyProduct;