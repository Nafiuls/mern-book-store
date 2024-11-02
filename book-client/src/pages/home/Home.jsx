import Banner from "./Banner";
import BestSellerBook from "./BestSellerBook";
import FavoriteBooks from "./FavoriteBooks";
import PromoBanner from "./PromoBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBook />
      <FavoriteBooks />
      <PromoBanner />
    </div>
  );
};

export default Home;
