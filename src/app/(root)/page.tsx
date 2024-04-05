import Banner from "./components/Home/Banner/Banner";
import FeaturedShop from "./components/Home/FeaturedShop/FeaturedShop";
import PopularCategory from "./components/Home/PopularCategory/PopularCategory";
import PopularCities from "./components/Home/PopularCities/PopularCities";

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