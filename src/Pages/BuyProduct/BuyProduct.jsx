import { FaPhone } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BuyProduct = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Assuming you want to go back one step
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);

        const name = formData.get('name');
        const number = formData.get('number');
        const address = formData.get('address');
        const email = formData.get('email');

    }

    return (
        <div>
            <span onClick={goBack}>
                <IoArrowBack className="my-1  text-orange-500 hover:text-lime-500 text-3xl" />
            </span>
            <h3 className="lg:text-3xl font-bold text-center mx-auto bg-gray-600 text-white  lg:mt-1 lg:py-2">Please provide Correct Information</h3>
            <form onSubmit={handleSubmit} className="lg:ml-[300px] px-2 w-full pb-6 mb-10">
                <div className="my-3 mt-8">
                    <label htmlFor="name">Name*</label>
                    <input required className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="name" placeholder="Your Name" name="name" />
                </div>
                <div className="my-3">
                    <label htmlFor="number">Mobile Number*</label>
                    <input required className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="number" placeholder="Enter Number" name="number" />
                </div>
                <div className="my-3">
                    <label htmlFor="address">Your address*</label>
                    <input required className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="text" placeholder="village/Upazila/Zila" name="address" />
                </div>
                <div className="my-3 ">
                    <label htmlFor="email">Email</label>
                    <input className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="email" placeholder="Enter Email" name="email" />
                </div>
                <input className="block   rounded-smborder-lime-400 bg-amber-950 rounded-sm text-white font-bold mb-2 px-3 py-2 lg:w-1/2 w-full" type="submit" value="Submit" />
                <div className="flex items-center  gap-4">
                    <span className="flex text-4xl gap-5"> <FaPhone/> <span>:</span> </span>
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
    )
}

export default BuyProduct;