import "./Footer.scss"
import { Link } from "react-router-dom"
import {AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube} from "react-icons/ai"
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

      </footer>
    </>
  )
}

export default Footer