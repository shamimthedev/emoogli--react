import BannerSlider from "../components/BannerSlider"
import Categories from "../components/Categories"
import FeaturedProducts from "../components/FeaturedProducts"


const Home = () => {
  return (
    <div>
      <BannerSlider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </div>
  )
}

export default Home