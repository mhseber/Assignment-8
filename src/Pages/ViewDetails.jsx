import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AiOutlineHeart } from "react-icons/ai";
import { FaCartArrowDown, FaStar, FaStarHalfAlt } from "react-icons/fa";

const fetchProducts = async () => {
    try {
        const response = await fetch('./GadgetData.json');
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
const ViewDetails = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        getProducts();
    }, []);

    return (
        <div>
            <Helmet>
                <title>ViewDetails || Gadget Heaven</title>
            </Helmet>
            {/* text */}
            <section className="text-center lg:mt-[-400px] mt-[-200px] pb-10 ">
                <h1 className="text-5xl text-white font-extrabold ">Product Details</h1>
                <p className="text-xl text-white font-medium pt-4">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
            </section>
            {/* card */}
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6 p-8">
                {products.map((product) => (
                    <div key={product.product_id} className="bg-white p-6 rounded-lg shadow-lg shadow-purple-700 border-t-4 border-purple-600 ">
                        <div className="lg:flex">
                            <div>
                                <img src={product.product_image} alt={product.product_title} className="w-full h-48 object-contain pt-6" />
                            </div>
                            <div className="lg:pl-16">
                                <h2 className="text-xl font-bold mt-4">{product.product_title}</h2>
                                <p className="text-lg font-semibold mt-2">${product.price}</p>
                                <div className={`w-[100px] h-[32px] flex items-center justify-center text-white font-semibold mt-2 rounded ${product.availability ? 'bg-green-600' : 'bg-red-600'}`}>
                                    {product.availability ? "In Stock" : "Out of Stock"}
                                </div>
                                <p className="text-gray-400 mt-2">{product.description}</p>
                                <div className="mt-4">
                                    <span className="text-xl font-bold">Specification:</span>
                                    <ul className="list-decimal ml-6 mt-2 text-gray-400">
                                        {product.Specification.map((spec, index) => (
                                            <li key={index}>{spec}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-4 flex items-center gap-2">
                                    <span className="flex text-yellow-500 text-xl"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
                                    <span className="font-medium">{product.rating}</span>
                                </div>
                                <div className="lg:flex pt-4 gap-3 space-y-4 lg:space-y-0">
                                    <button className="btn bg-purple-500 text-white rounded-3xl">Add to Cart <FaCartArrowDown /></button>
                                    <button className="btn  lg:ml-0 ml-10 bg-white text-xl rounded-full"> <AiOutlineHeart /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </section>
        </div>
    );
};

export default ViewDetails;