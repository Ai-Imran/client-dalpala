import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { sendEmailVerification } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Signup = () => {


    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const {createUser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [errorMessage, setErrorMessage] = useState('');

    const from = location.state?.from?.pathname || "/";

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

   // Inside your handleSubmit function

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get('name');
    const number = formData.get('number');
    const gender = formData.get('gender');
    const dateOfBirth = formData.get('date');
    const address = formData.get('address');
    const email = formData.get('email');

    try {
        const res = await createUser(email, password);
        await updateUserProfile(name, number); // Update display name and phone number
        await sendEmailVerification(res.user); // Send email verification
        navigate(from, { replace: true });
        window.location.reload();
    } catch (err) {
        if (err.code === 'auth/email-already-in-use') {
            setErrorMessage('This email is already in use. Please use a different email.');
        } else {
            console.error(err);
        }
    }
};

    return (
        <div>
            <Helmet>
                <title>Dalpala | Signup</title>
            </Helmet>
            <h3 className="lg:text-4xl font-bold text-center mx-auto bg-gray-600 text-white py-3 lg:mt-16 lg:py-6">Create an Account</h3>
            <form onSubmit={handleSubmit} className="border px-2 w-full pb-6 mb-10">

                <div className="lg:w-3/4 w-full lg:ml-[330px] mx-auto">
                    <div className="my-3 mt-8">
                        <label htmlFor="name">Name*</label>
                        <input required className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="text" placeholder="Your Name" name="name" />
                    </div>
                    <div className="my-3">
                        <label htmlFor="number">Mobile Number*</label>
                        <input required className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="number" placeholder="Enter Number" name="number" />
                    </div>
                    <div className="my-3">
                        <label htmlFor="address">Your address*</label>
                        <input required className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="text" placeholder="village/Upazila/Zila" name="address" />
                    </div>
                    <div className="my-2">
                        <label className="" htmlFor="gender">Gender</label>
                        <select className="ml-2" id="gender" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>

                    </div>

                    <div className="my-3 ">
                        <label htmlFor="date">Date of Birth</label>
                        <input required className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="date" name="date" />
                    </div>
                    <div className="my-3 ">
                        <label htmlFor="email">email address*</label>
                        <input required className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full" type="email" placeholder="Enter Email" name="email" />
                    </div>
                    <div className="my-3">
                        <label htmlFor="password">Password*</label>
                        <input
                            required
                            className="block border outline-none rounded-sm hover:border-lime-400 border-lime-400 px-3 py-2 lg:w-1/2 w-full"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <div className="flex mt-2 gap-2">
                            <input
                                type="checkbox"
                                defaultChecked={showPassword}
                                onChange={handleCheckboxChange}
                                className="checkbox rounded-sm border-lime-400 checked:border-lime-600 [--chkbg:theme(colors.lime.600)] [--chkfg:lime]"
                            />
                            <label htmlFor="showPassword">Show Password</label>
                        </div>
                    </div>
                    <input className="block   rounded-smborder-lime-400 bg-[#4cd137] rounded-sm text-white font-bold mb-2 px-3 py-2 lg:w-1/2 w-full" type="submit" value="Sign in" />
                </div>
                {errorMessage && <p className="text-red-500 mx-auto text-center">{errorMessage}</p>}
        <p className="mx-auto text-center">If You have already Account ! please <Link className="hover:text-lime-500 text-lime-700" to={'/login'}>Login</Link></p>
            </form>

        </div>
    )
}
export default Signup;