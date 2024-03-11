import Banner from "./components/Banner/Banner";
import PopularCategory from "./components/PopularCategory/PopularCategory";
import PopularCities from "./components/PopularCities/PopularCities";

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularCategory />
            <PopularCities />
        </div>
    );
};

export default Home;