import { Outlet } from "react-router-dom";
import Card from "../Card/Card";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Hero></Hero>
            <Card></Card>
            <Footer></Footer>
        </div>
    );
};

export default Root;