import "./Hero.scss"
import Nav from "../../layout/nav/Nav"
import Logo from "../../assets/images/logo.svg"
import SofaImage from "../../assets/images/sofaImage.png"
import {BsFillTelephoneFill as PhoneIcon} from "react-icons/bs"
const Hero = () => {
  return (
    <div className="hero">
      <Nav/>
        <div className="hero-wrapper">
            <div className="hero__navbar">
                <a href="#" className="hero__logo">
                    <img src={Logo} alt="Hero-logo" />
                    <h1>DREAMCLOUD</h1>
                </a>
                <div className="hero__navbar-connect">
                    <strong><PhoneIcon/> +998 99 777 77 77</strong>
                    <button>Buyurtma Berish</button>
                </div>
            </div>

            <div className="hero__content-container">
                <div className="hero-content">
                    <h2>Kechalari sokin <br /> dam oling</h2>
                    <button>Kategoriyalar &nbsp; &#8594;</button>
                </div>
                <img src={SofaImage} alt="sofa" width={670} height={360} />
            </div>
        </div>
    </div>
  )
}

export default Hero