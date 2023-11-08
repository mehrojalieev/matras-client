import Nav from "../../layout/nav/Nav"
import Hero from "../../components/hero/Hero"
import Features from "../../components/features/Features"
import Statics from "../../components/statics/Statics"
import Footer from "../../layout/footer/Footer"
import Address from "../../components/address/Address"
import Connect from "../../components/connect/Connect"
import Success from "../../components/connect/Success"

const Home = () => {
  return (
    <>
      <Hero/>
      <Statics/>
      <Features/>
      <Address/>
      <Connect/>
      {/* <Success/> */}
      <Footer/>
    </>

  )
}

export default Home