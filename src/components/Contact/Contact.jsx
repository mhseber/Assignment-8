import { LuPhoneCall } from "react-icons/lu";
import discount from "../../../public/img/discount.jpeg"
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);

    return (
        <div>
            {/* banner */}
            <section>
                <div className="hero lg:mt-[-500px] mt-[-300px] lg:p-14 p-5">
                    <div className="hero-content flex-col lg:flex-row-reverse ">
                        <img
                            data-aos="fade-up"
                            data-aos-delay="300"
                            src={discount}
                            className="max-w-sm rounded-t-2xl rounded-r-3xl border-t-4 border-white shadow-2xl" />
                        <div>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="300"
                                className="lg:text-purple-200 text-purple-700 text-xl pb-4">Get To Know Us</p>
                            <h1
                                data-aos="slide-left"
                                className="lg:text-5xl text-3xl lg:text-white text-purple-900 font-bold">Save Money With Specials <br />
                                Discount Offer</h1>
                            <p className="py-6 text-gray-400">
                                Pleasures to secure other greater pleasures, or else he endures pains
                                <br />to avoid worse pains to the selection circumstances
                            </p>
                            <div className="flex gap-6">
                                <button
                                    data-aos="fade-down"
                                    data-aos-delay="500"
                                    className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold border-none">Contact Us</button>
                                <div className="flex gap-3">
                                    <button className="btn bg-white text-2xl rounded-full p-2"><LuPhoneCall /></button>
                                    <div>
                                        <p className="lg:text-white font-light"><i>Make a call</i></p>
                                        <p className="lg:text-white font-light"><i>00 55 475 5242</i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* cards */}
            <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-28 ml-12 ">
                {/* 1 */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="card bg-neutral text-neutral-content w-96 hover:scale-105 transition-transform duration-300 mb-4">
                    <div className="card-body items-center text-center">
                        <button className="btn w-20 h-16 bg-white text-2xl rounded-full p-2"><LuPhoneCall /></button>
                        <p className="text-gray-400">Contact Us</p>
                        <p><i>MH SEBER</i></p>
                        <p>+55 855 0577 5405</p>
                    </div>
                </div>
                {/* 2 */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="card bg-neutral text-neutral-content w-96 hover:scale-105 transition-transform duration-300 mb-4">
                    <div className="card-body items-center text-center">
                        <button className="btn w-20 h-16 bg-white text-2xl rounded-full p-2"><IoIosMail /></button>
                        <p className="text-gray-400">Mail Us</p>
                        <p>seber@gmail.com</p>
                    </div>
                </div>
                {/* 3 */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="card bg-neutral text-neutral-content w-96 hover:scale-105 transition-transform duration-300">
                    <div className="card-body items-center text-center">
                        <button className="btn w-20 h-16 bg-white text-2xl rounded-full p-2"><FaLocationDot /></button>
                        <p className="text-gray-400">Our Office Location</p>
                        <p>44 No S K Dash Road GANDARIA</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;