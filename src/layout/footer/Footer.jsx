import "./Footer.scss"
import { Link } from "react-router-dom"
import {AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube, AiOutlineArrowUp} from "react-icons/ai"
import FooterImage from "../../assets/images/made-company.svg"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__menu">
          <ul>
            <li><Link>Biz haqimizda</Link></li>
            <li><Link>Katalog</Link></li>
            <li><Link>Aksiya</Link></li>
            <li><Link>Manzilimiz</Link></li>
          </ul>
        <div className="footer__icons">
        <a href="#"><AiFillFacebook/></a>
        <a href="#"><AiOutlineTwitter/></a>
        <a href="#"><AiOutlineInstagram/></a>
        <a href="#"><AiFillYoutube/></a>
        </div>
        </div>
      <div className="footer__info">
          <p>  © 2021 Dream Cloud. Barcha huquqlar himoyalangan.  </p>
          <a href="/"><AiOutlineArrowUp/></a>
          <img src={FooterImage} alt="Made by Company" />
      </div>
      </footer>
    </>
  )
}

export default Footer