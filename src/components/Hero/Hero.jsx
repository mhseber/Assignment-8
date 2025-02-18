import { Link } from 'react-router-dom';
import BannerImg from '/img/banner.jpg'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);

    return (
        <div className="lg:mt-[-430px] mt-[-230px]">
            <div className="lg:ml-56 p-4">
                <h1 data-aos="fade-up" className="lg:text-5xl text-2xl   font-extrabold text-white ">Upgrade Your Tech Accessorize <br /> with  Gadget  Heaven Accessories</h1>
                <p data-aos="slide-left" className="py-6  text-white font-semibold">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <Link to="/viewDetails">
                    <button
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="btn bg-white text-[#9538E2] font-semibold text-xl rounded-full lg:w-[168px] lg:ml-96 ml-20">Shop Now</button>
                </Link>
            </div>
            <div className="lg:ml-64  ">
                <img
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className=" w-[800px] h-[400px] rounded-3xl pt-4 shadow-xl shadow-violet-500" src={BannerImg} alt="" />
            </div>

        </div>
    );
};

export default Hero;

