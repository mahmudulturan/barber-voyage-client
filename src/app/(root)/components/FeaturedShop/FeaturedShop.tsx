import { featuredBarberShop } from "@/constant/constant";
import ShopCard from "../Shared/ShopCard/ShopCard";

const FeaturedShop = () => {
    return (
        <div className="bg-white min-h-[70vh] py-12">
            <div className="wrapper">
                <h4 className='uppercase font-semibold text-3xl text-seconderyCol'>Featured BarberShop</h4>
                <div className="grid grid-cols-3 gap-6 my-6">
                    {
                        featuredBarberShop?.map((shop) => <ShopCard shopData={shop} key={shop?._id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedShop;