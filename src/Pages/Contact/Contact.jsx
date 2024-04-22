import { Helmet } from "react-helmet-async";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {

    return (
        <div className="min-h-screen w-3/4 mx-auto ">
            <Helmet>
                <title>Dalpala | Contact</title>
            </Helmet>
            <div>
                <p>Our service updateing day by day so sometimes you are facing some problem . Do not worry, We are solve this problem as so as possible.If you need say some please contact us .</p>
            </div>
            <div className="flex py-3 lg:text-xl">
                    <span className="flex justify-center items-center gap-3">Mazhroul Hoque <IoArrowForward className="text-green-400 " /> </span>
                    <div className="flex  ml-4 gap-4">
                        <span>01740843109</span>
                        <FaWhatsapp className="text-3xl" />
                        <a target="_blank" href="https://www.facebook.com/mazharul.hoque.homna?mibextid=ZbWKwL"> <FaFacebook className="text-3xl" /></a>

                       
                        <p><a href="mailto:homna@gmail.com"> <MdEmail className="text-3xl" /></a> </p>
                    </div>
                </div>
                <div className="flex py-3 lg:text-xl">
                    <span className="flex justify-center items-center gap-3">Md Imran <IoArrowForward className="text-green-400 " /> </span>
                    <div className="flex  ml-4 gap-4">
                        <span>01906951915</span>
                        <FaWhatsapp className="text-3xl" />
                        <a target="_blank" href="https://www.facebook.com/imran.chowdhury.90663894"> <FaFacebook className="text-3xl" /></a>

                        <p><a href="mailto:mdimranahmed00143@gmail.com"> <MdEmail className="text-3xl" /></a> </p>
                    </div>
                </div>
        </div>
    )
}
export default Contact;