import React from 'react';


const Gadget = ({ gadget }) => {
    const { product_image, product_title, price } = gadget;
    return (
        <div className="card  lg:w-80 shadow-xl p-4">
            <figure className='bg-gray-100'>
                <img
                    src={product_image}
                    className='h-[176px] p-4 rounded-3xl '
                    alt="Gadget" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{product_title}</h2>
                <p className='text-gray-400'>Price: {price}$ </p>
                <div className="card-actions ">
                    <button className="btn btn-outline btn-secondary rounded-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Gadget;