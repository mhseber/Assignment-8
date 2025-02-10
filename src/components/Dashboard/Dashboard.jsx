import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaSortAmountDown, FaTrashAlt } from "react-icons/fa";

const fetchProducts = async () => {
    try {
        const response = await fetch('./Dashboard.json');
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

const Dashboard = () => {
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
                <title>Dashboard || Gadget Heaven</title>
            </Helmet>
            <div className="lg:mt-[-400px] mt-[-200px] ">
                {/* text */}
                <section className="text-center pb-10 ">
                    <h1 className="text-5xl text-white font-extrabold ">Dashboard</h1>
                    <p className="text-xl text-white font-medium pt-4">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
                </section>
                {/* btn */}
                <section className="flex justify-center items-center gap-3 pt-4 pb-4">
                    <button className="btn w-[169px] text-white bg-purple-500 hover:text-white hover:bg-purple-800 rounded-2xl"> Cart</button>
                    <button className="btn  w-[169px] text-white bg-purple-500 hover:text-white hover:bg-purple-800 rounded-2xl">WishList</button>
                </section>
            </div>
            {/* cart */}
            <section className="flex justify-around lg:mt-40 mt-10 mb-7">
                <h1 className="text-3xl font-bold">Cart</h1>
                <div className="lg:flex gap-2">
                    <p className=" text-2xl  font-bold pb-5 lg:mr-20">Total Cost : 1009.0999</p>
                    <button className="btn btn-outline  ml-6 lg:ml-20 text-purple-500 hover:text-white hover:bg-purple-500 rounded-full">Sort by Price <FaSortAmountDown /></button>
                    <button className="btn ml-3 bg-purple-500 text-white hover:text-white hover:bg-purple-700 rounded-full  ">Purchase</button>
                </div>
            </section>
            {/* CARD */}
            <section className=" w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6 p-8">
                {products.map((product) => (
                    <div key={product.product_id} className="bg-white p-6 rounded-lg shadow-lg  border-t-4 border-gray-500 ">
                        <div className="lg:flex">
                            <div>
                                <img src={product.product_image} alt={product.product_title} className="w-full h-48 object-contain pt-6" />
                            </div>
                            <div className="lg:pl-16">
                                <div className="flex justify-between">
                                    <h2 className="text-xl font-bold mt-4">{product.product_title}</h2>
                                    <p className=" text-red-700 pl-96 pt-5 text-2xl "> <FaTrashAlt /></p>
                                </div>
                                <p className="text-gray-400 mt-2">{product.description}</p>
                                <p className="text-lg font-semibold mt-2">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Dashboard;