import Banner from "../components/Banner"
import Hero from "../components/home/Hero"
import Partners from "../components/home/Partners"
import SectionOne from "../components/home/SectionOne"
import Services from "../components/home/Services"
import Why from "../components/home/Why"

const Home = () => {
  return (
    <main>
      <Hero/>
      <Partners/>
      <SectionOne/>
      <Services/>
      <Why/>
      <Banner/>
    </main>
  )
}

export default Home