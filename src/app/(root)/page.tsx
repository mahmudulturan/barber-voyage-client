import Banner from "./components/Banner/Banner";
import FeaturedShop from "./components/FeaturedShop/FeaturedShop";
import PopularCategory from "./components/PopularCategory/PopularCategory";
import PopularCities from "./components/PopularCities/PopularCities";

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularCategory />
            <FeaturedShop />
            <PopularCities />
        </div>
    );
};

export default Home;