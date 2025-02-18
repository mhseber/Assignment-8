import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaSortAmountDown, FaTrashAlt } from "react-icons/fa";

const fetchProducts = async (type) => {
    try {
        const response = await fetch(type === "cart" ? './Cart.json' : './WishList.json');
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

const Dashboard = ({ setCartCount }) => {
    const [products, setProducts] = useState([]);
    const [view, setView] = useState("cart");

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts(view);
            setProducts(data);
        };
        getProducts();
    }, [view]);

    const handleAddToCart = () => {
        setCartCount(prevCount => prevCount + 1);
    };

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);

    return (
        <div>
            <Helmet>
                <title>Dashboard || Gadget Heaven</title>
            </Helmet>
            <div className="lg:mt-[-400px] mt-[-200px] ">
                {/* Header Section */}
                <section className="text-center pb-10 ">
                    <h1 data-aos="fade-up"
                        data-aos-delay="300"
                        className="text-5xl text-white font-extrabold ">Dashboard</h1>
                    <p data-aos="slide-left" className="text-xl text-white font-medium pt-4">
                        Explore the latest gadgets that will take your experience to the next level. <br />
                        From smart devices to the coolest accessories, we have it all!
                    </p>
                </section>
                {/* Toggle Buttons */}
                <section className="flex justify-center items-center gap-3 pt-4 pb-4">
                    <button
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className={`btn w-[169px] text-white ${view === "cart" ? "bg-purple-800" : "bg-purple-500 hover:bg-purple-800"} rounded-2xl`}
                        onClick={() => setView("cart")}
                    >
                        Cart
                    </button>
                    <button
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className={`btn w-[169px] text-white ${view === "wishlist" ? "bg-purple-800" : "bg-purple-500 hover:bg-purple-800"} rounded-2xl`}
                        onClick={() => setView("wishlist")}
                    >
                        WishList
                    </button>
                </section>
            </div>
            {/* Product List Section */}
            <section className="flex justify-around lg:mt-40 mt-10 mb-7">
                <h1 className="text-3xl font-bold">{view === "cart" ? "Cart" : "WishList"}</h1>
                <div className="lg:flex gap-2">
                    <p className="text-2xl font-bold pb-5 lg:mr-20">Total Cost : 1009.0999</p>
                    <button className="btn btn-outline ml-6 lg:ml-20 text-purple-500 hover:text-white hover:bg-purple-500 rounded-full">
                        Sort by Price <FaSortAmountDown />
                    </button>
                    <button className="btn ml-3 bg-purple-500 text-white hover:text-white hover:bg-purple-700 rounded-full">Purchase</button>
                </div>
            </section>
            {/* Product Cards */}
            <section className="w-[1000px] lg:mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 p-4">
                {products.map((product) => (
                    <div key={product.product_id} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-gray-500">
                        <div className="lg:flex">
                            <div>
                                <img
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    src={product.product_image} alt={product.product_title} className="lg:w-full h-48 object-contain pt-6" />
                            </div>
                            <div className="lg:pl-16">
                                <div className="lg:flex justify-between">
                                    <h2 data-aos="slide-left" className="text-xl font-bold mt-4">{product.product_title}</h2>
                                    <p data-aos="slide-left" className="text-red-700 lg:pl-96 pt-5 text-2xl"> <FaTrashAlt /></p>
                                </div>
                                <p data-aos="slide-left" className="text-gray-400 mt-2">{product.description}</p>
                                <p data-aos="slide-left" className="text-lg font-semibold mt-2">${product.price}</p>
                                {view === "wishlist" && (
                                    <button
                                        data-aos="fade-up"
                                        data-aos-delay="500"
                                        className="btn mt-3 bg-purple-500 text-white hover:bg-purple-700 rounded-2xl"
                                        onClick={handleAddToCart}
                                    >
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Dashboard;


