import HomeAgeRange from '../../components/homeAgeRange/HomeAgeRange'
import HomeBlogs from '../../components/homeBlogs/HomeBlogs'
import HomeBrands from '../../components/homeBrands/HomeBrands'
import HomeCarousel from '../../components/homeCarousel/HomeCarousel'
import HomeDelivery from '../../components/homeDelivery/HomeDelivery'
import HomeHeroCard from '../../components/homeHeroCard/HomeHeroCard'
import HomeTopPicks from '../../components/homeTopPicks/HomeTopPicks'
import HomeToyTypes from '../../components/homeToyTypes/HomeToyTypes'

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <HomeAgeRange />
      <HomeCarousel />
      <HomeToyTypes />
      <HomeBrands />
      <HomeTopPicks />
      <HomeHeroCard />
      <HomeBlogs />
      <HomeDelivery />
    </div>
  )
}

export default Home