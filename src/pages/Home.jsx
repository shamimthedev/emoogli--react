import BannerSlider from "../components/BannerSlider"
import Categories from "../components/Categories"
import Contact from "../components/Contact"
import FeaturedProducts from "../components/FeaturedProducts"


const Home = () => {
  return (
    <div>
      <BannerSlider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  )
}

export default Home