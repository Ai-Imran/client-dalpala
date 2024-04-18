import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const {googleSignIn,signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    // console.log('state in the location login page', location.state)

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        signIn(email,password)
        .then(res => {
            // console.log(res.user);
            navigate(from, { replace: true });

        })
        .catch(err => console.log(err))
      
    } 
    const handleGoogle = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
    }
    return (
        <div>
            <Helmet>
                <title>Dalpala | Login</title>
            </Helmet>
            <h3 className="lg:text-4xl font-bold text-center mx-auto bg-gray-600 text-white py-3 lg:mt-16 lg:py-6">Login Now</h3>
            <form onSubmit={handleSubmit} className="border px-2 w-full pb-6 mb-10">
                <p className="lg:w-3/4 mx-auto  pt-6">Please login if you are a registered customer
                    If are not registered yet, you can <Link className=" hover:text-lime-500 underline text-lime-600" to={'/signup'}>register</Link> or continue as a guest customer.</p>
                <div className="lg:w-3/4 w-full lg:ml-[330px] mx-auto">
                    <div className="my-3 mt-8">
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
                    <input  className="block   rounded-smborder-lime-400 bg-[#4cd137] rounded-sm text-white font-bold mb-2 px-3 py-2 lg:w-1/2 w-full" type="submit" value="Login" />
                </div>
                <div className="divider lg:w-1/3 mx-auto divider-success">Or</div>
                <p className="text-xl font-bold mx-auto text-center">Login with <span className="inline-block text-lime-500 text-3xl"><FaGoogle onClick={handleGoogle}/></span> </p>
            </form>
            
        </div>
    )
}
export default Login;