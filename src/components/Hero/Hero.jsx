import BannerImg from '/img/banner.jpg'
const Hero = () => {
    return (
        <div className="lg:mt-[-430px] mt-[-230px]">
            <div className="lg:ml-56">
                <h1 className="lg:text-5xl text-2xl   font-extrabold text-white ">Upgrade Your Tech Accessorize <br /> with  Gadget  Heaven Accessories</h1>
                <p className="py-6 text-white font-semibold">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button className="btn bg-white text-[#9538E2] font-semibold text-xl rounded-full lg:w-[168px] lg:ml-96">Shop Now</button>
            </div>
            <div className="lg:ml-64  ">
                <img className=" w-[800px] h-[400px] rounded-3xl pt-4 shadow-xl shadow-violet-500" src={BannerImg} alt="" />
            </div>

        </div>
    );
};

export default Hero;

