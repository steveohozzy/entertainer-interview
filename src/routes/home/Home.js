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
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <HomeAgeRange />
      <HomeCarousel />
      <div className='flex justify-center'>
        <h3 id="toy-types" className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent text-center my-4">Toy Types</h3>
      </div>
      <HomeToyTypes />
      <div className='flex justify-center'>
        <h3 id="toy-types" className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent text-center my-4">Best Brands</h3>
      </div>
      <HomeBrands />
      <HomeTopPicks />
      <HomeHeroCard />
      <HomeBlogs />
      <HomeDelivery />
    </div>
  )
}

export default Home