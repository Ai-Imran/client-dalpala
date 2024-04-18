import { Helmet } from "react-helmet-async";
import useProducts from "../../Hooks/useProducts";
import { Link } from "react-router-dom";

const Shpos = () => {

    
    const [products] = useProducts()

    console.log(products);

    return (
        <div>
            <Helmet>
                <title> Dalpala | Low Price | High Quality</title>
            </Helmet>
            <div className="grid grid-cols-3">
                {
                    products.map(product => <Link to={'/single-shop'} key={product.Product_id}>
                        <div className="card  bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="card-title">Shoes!</h2>
                          <p>If a dog chews shoes whose shoes does he choose?</p>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                    </div>
                    </Link>)
                }
            </div>
        </div>
    )
}
export default Shpos;