/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "./assets/logo.svg"
import search from "./assets/search-solid.svg"
import user from "./assets/user-solid.svg"
import cart from "./assets/shopping-cart-solid.svg"
import menu from "./assets/bars-solid.svg"
import "./index.scss"

export const Header = () => {
    return(
        <div className="header-wrapper">
            <div className="wrapper">
                <img alt="Menu icon." className="menu-button" src={menu}/>
                <div className="image-wrapper">
                    <img alt="La Preuve logo." className="logo" src={logo}/>
                </div>
                <div className="buttons">
                    <img alt="Search icon." className="search icon" src={search} />
                    <img alt="User icon." className="user icon" src={user} />
                    <img alt="Shopping Cart icon." className="cart icon" src={cart} /> 
                </div>
            </div>
            <div className="nav-bar">
                <ul className="nav-links">
                    <li className="nav-link focus"><a href="#">SALE</a></li>
                    <li className="nav-link"><a href="#">E-SHOP</a></li>
                    <li className="nav-link"><a href="#">LOOKBOOK</a></li>
                    <li className="nav-link"><a href="#">CAMPAÑA</a></li>
                    <li className="nav-link"><a href="#">LOCALES</a></li>
                </ul>
            </div>
        </div>
    )
}
