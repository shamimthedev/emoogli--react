import BannerSlider from "../components/BannerSlider"
import FeaturedProducts from "../components/FeaturedProducts"


const Home = () => {
  return (
    <div>
      <BannerSlider/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home