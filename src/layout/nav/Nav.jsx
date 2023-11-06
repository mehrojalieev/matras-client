import "./Nav.scss"
import { Container } from "../../utils/Utils"
import { NavLink, Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"
const Nav = () => {
  return (

      <nav>
        <div className="nav__menu-container">
          <ul className="nav-menu">
            <li>
              <NavLink className={({ isActive }) => isActive ? " link link--active" : "link"} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "link link--active" : "link"} to="katalog">Katalog</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "link link--active" : "link"} to="about">Biz haqimizda</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? " link link--active" : "link"} to="address">Manzilimiz</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? " link link--active" : "link"} to="contact">Aloqa</NavLink>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Nav