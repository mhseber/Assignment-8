
import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Card = () => {

    const [gadget, setGadget] = useState([]);

    useEffect(() => {
        fetch('./GadgetData.json')
            .then(res => res.json())
            .then(data => setGadget(data))
    }, []);
    return (
        <div className="mb-20 ">
            <div>
                <h1 className="text-3xl font-bold flex justify-center items-center pt-6 text-[#9538E2]">Explore Cutting-Edge Gadgets</h1>
            </div >
            <section className="lg:flex mt-7 pl-8 gap-4">
                <div className="border  bg-white w-60 h-[400px] rounded-lg shadow-xl shadow-violet-500  ">
                    <button className="btn bg-slate-100 text-purple-400 ml-6 mt-2 w-[192px] rounded-full font-medium text-sm">All Product</button>
                    <button className="btn bg-slate-100 text-purple-400 ml-6 mt-2 w-[192px] rounded-full font-medium text-sm">Laptops</button>
                    <button className="btn bg-slate-100 text-purple-400 ml-6 mt-2 w-[192px] rounded-full font-medium text-sm">Phones</button>
                    <button className="btn bg-slate-100 text-purple-400 ml-6 mt-2 w-[192px] rounded-full font-medium text-sm">Accessories</button>
                    <button className="btn bg-slate-100 text-purple-400 ml-6 mt-2 w-[192px] rounded-full font-medium text-sm">Smart Watches</button>
                    <button className="btn bg-slate-100 text-purple-400 ml-6 mt-2 w-[192px] rounded-full font-medium text-sm">MacBook</button>
                    <button className="btn bg-slate-100 text-purple-400 ml-6 mt-2 w-[192px] rounded-full font-medium text-sm">Iphone</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        gadget.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Card;