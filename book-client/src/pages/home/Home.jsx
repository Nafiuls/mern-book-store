import Banner from "./Banner";
import BestSellerBook from "./BestSellerBook";
import FavoriteBooks from "./FavoriteBooks";
import OtherBooks from "./OtherBooks";
import PromoBanner from "./PromoBanner";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBook />
      <FavoriteBooks />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  );
};

export default Home;
