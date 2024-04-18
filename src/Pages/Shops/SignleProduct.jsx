import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
    const product = useLoaderData()
    console.log(product);

    return (
        <div className="">
            <h2 className="">This is a product detail page</h2>
        </div>
    )
}

export default SingleProduct;