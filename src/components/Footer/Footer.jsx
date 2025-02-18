import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);

    return (
        <div>
            <footer className="footer footer-center bg-slate-50  text-neutral-content p-10">
                <div className="text-center justify-center items-center">
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="text-center text-3xl font-extrabold text-purple-900">Gadget Heaven</h1>
                    <p data-aos="slide-right" className="text-purple-700">Leading the way in cutting-edge technology and innovation.</p>

                </div>

                <div className="flex lg:gap-40">
                    <div data-aos="slide-left">
                        <h6 className="footer-title text-purple-900">Services</h6>
                        <a className="link link-hover pt-4 text-gray-500 ">Product Support</a>
                        <br />
                        <a className="link link-hover text-gray-500">Order Tracking</a>
                        <br />
                        <a className="link link-hover text-gray-500">Shipping & Delivery</a>
                        <br />
                        <a className="link link-hover text-gray-500">Return</a>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-delay="300">
                        <h6 className="footer-title text-purple-900">Company</h6>
                        <a className="link link-hover pt-4 text-gray-500">About Us</a>
                        <br />
                        <a className="link link-hover text-gray-500">Careers</a>
                        <br />
                        <a className="link link-hover text-gray-500">Contact</a>
                        <br />
                        <a className="link link-hover text-gray-500">Help</a>
                    </div>
                    <div data-aos="slide-right">
                        <h6 className="footer-title text-purple-900">Legal</h6>
                        <a className="link link-hover pt-4 text-gray-500">Terms of Service</a>
                        <br />
                        <a className="link link-hover text-gray-500">Privacy Policy</a>
                        <br />
                        <a className="link link-hover text-gray-500">Cookie Policy</a>
                        <br />
                        <a className="link link-hover text-gray-500">Alert</a>
                    </div>

                </div>

            </footer>
        </div>
    );
};

export default Footer;