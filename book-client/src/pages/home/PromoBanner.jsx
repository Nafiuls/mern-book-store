import { Link } from "react-router-dom";
import bookPic from "../../assets/awardbooks.png";

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="capitalize text-4xl font-bold mb-6 leading-snug">
            2024 national book awards for fiction shortlist
          </h2>
          <Link to="/shop" className=" block">
            <button className="capitalize bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
              get promo code
            </button>
          </Link>
        </div>
        <div>
          <img src={bookPic} alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;