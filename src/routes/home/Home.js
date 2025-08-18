import HomeAgeRange from '../../components/homeAgeRange/HomeAgeRange'
import HomeBlogs from '../../components/homeBlogs/HomeBlogs'
import HomeBrands from '../../components/homeBrands/HomeBrands'
import HomeCarousel from '../../components/homeCarousel/HomeCarousel'
import HomeDelivery from '../../components/homeDelivery/HomeDelivery'
import HomeHeroCard from '../../components/homeHeroCard/HomeHeroCard'
import HomeOffers from '../../components/homeOffers/HomeOffers'
import HomeTopPicks from '../../components/homeTopPicks/HomeTopPicks'
import HomeToyTypes from '../../components/homeToyTypes/HomeToyTypes'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <HomeAgeRange />
      <HomeCarousel />
      <div className='flex justify-center'>
        <h3 id="toy-types" className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent text-center mt-5 mb-2 mt-8 mb-5 drop-shadow-[0_3px_0_rgba(255,255,255,1)]">Toy Types</h3>
      </div>
      <HomeToyTypes />
      <div className='flex justify-center'>
        <h3 id="offers" className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent text-center my-5 md:my-8 drop-shadow-[0_3px_0_rgba(255,255,255,1)]">Offers</h3>
      </div>
      <HomeOffers />
      <HomeTopPicks />
      <div className='flex justify-center'>
        <h3 id="brands" className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent text-center mb-8 mt-8 md:mt-12 drop-shadow-[0_3px_0_rgba(255,255,255,1)]">Best Brands</h3>
      </div>
      <HomeBrands />
      <HomeHeroCard />
      <HomeBlogs />
      <HomeDelivery />
    </div>
  )
}

export default Home