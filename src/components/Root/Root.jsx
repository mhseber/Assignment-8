import { Outlet } from "react-router-dom";
import Card from "../Card/Card";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Hero></Hero>
            <Card></Card>
        </div>
    );
};

export default Root;