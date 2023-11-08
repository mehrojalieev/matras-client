import Nav from "../../layout/nav/Nav"
import Hero from "../../components/hero/Hero"
import Features from "../../components/features/Features"
import Statics from "../../components/statics/Statics"
import Footer from "../../layout/footer/Footer"
import Address from "../../components/address/Address"
const Home = () => {
  return (
    <>
      <Hero/>
      <Statics/>
      <Features/>
      <Address/>
      <Footer/>
    </>

  )
}

export default Home