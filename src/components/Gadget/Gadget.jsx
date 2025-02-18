import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";


const Gadget = ({ gadget }) => {
    const { product_image, product_title, price } = gadget;

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);

    return (
        <div className="card  lg:w-80 shadow-xl p-4">
            <figure className='bg-gray-100'>
                <img
                    data-aos="fade-up"
                    data-aos-delay="100"
                    src={product_image}
                    className='h-[176px] p-4 rounded-3xl '
                    alt="Gadget" />
            </figure>
            <div className="card-body">
                <h2 data-aos="slide-left" className="card-title font-bold">{product_title}</h2>
                <p data-aos="slide-left" className='text-gray-400'>Price: {price}$ </p>
                <div className="card-actions ">
                    <Link to="viewDetails">
                        <button
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="btn btn-outline btn-secondary rounded-full">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Gadget;