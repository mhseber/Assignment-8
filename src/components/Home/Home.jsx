import Hero from "../Hero/Hero";
import Card from "../Card/Card";
import { Helmet } from "react-helmet";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Gadget Heaven</title>
            </Helmet>
            <Hero></Hero>
            <Card></Card>
        </div>
    );
};

export default Home;