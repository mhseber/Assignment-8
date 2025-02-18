import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = () => {
    const [gadget, setGadget] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Product");

    useEffect(() => {
        fetch('./GadgetData.json')
            .then(res => res.json())
            .then(data => setGadget(data))
    }, []);

    const filteredGadgets = selectedCategory === "All Product"
        ? gadget
        : gadget.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);

    return (
        <div className="mb-20">
            <div>
                <h1 className="text-3xl font-bold flex justify-center items-center pt-6 text-[#9538E2]">
                    Explore Cutting-Edge Gadgets
                </h1>
            </div>

            <section className="lg:flex mt-7 pl-8 gap-4">
                {/* Sidebar Category Buttons */}
                <div className="border bg-white w-60 h-[400px] rounded-lg shadow-xl shadow-violet-500">
                    {["All Product", "Laptop", "Phone", "Accessories", "Smartwatch", "MacBook", "Iphone"].map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`btn bg-slate-100 ml-6 mt-2 w-[192px] rounded-full font-medium text-sm ${selectedCategory === category ? "bg-purple-400 text-white" : "text-purple-400"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredGadgets.length > 0 ? (
                        filteredGadgets.map(item => <Gadget gadget={item} key={item.product_id} />)
                    ) : (
                        <p
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-center text-2xl text-gray-500">No products found in this category.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Card;