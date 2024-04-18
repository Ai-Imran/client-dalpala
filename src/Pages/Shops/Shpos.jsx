import { Helmet } from "react-helmet-async";
import useProducts from "../../Hooks/useProducts";

const Shpos = () => {

    
    const [products] = useProducts()

    console.log(products);

    return (
        <div>
            <Helmet>
                <title> Dalpala | Low Price | High Quality</title>
            </Helmet>
        </div>
    )
}
export default Shpos;