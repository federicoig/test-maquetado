/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row, NavDropdown } from "react-bootstrap"
import logo from "./assets/logo.svg"
import search from "./assets/search-solid.svg"
import user from "./assets/user-solid.svg"
import cart from "./assets/shopping-cart-solid.svg"
import menu from "./assets/bars-solid.svg"
import "./index.scss"

export const Header = () => {

    return(
        <Container fluid className="d-xl-block d-lg-block d-md-block d-sm-block p-4 pb-0 pt-3">
            <Row>
                <Col sm={4} className="d-none d-xl-block d-lg-block d-md-block d-sm-block">
                </Col>
                <Col sm={4} className="d-none d-xl-block d-lg-block d-md-block d-sm-block">
                    <img className="logo" alt="La Preuve logo." src={logo}/>
                </Col>
                <Col sm={4} className="d-none d-xl-block d-lg-block d-md-block d-sm-block">
                    <div className="icons text-end">
                        <img alt="Search icon." className="search icon" src={search} />
                        <img alt="User icon." className="user icon" src={user} />
                        <img alt="Shopping Cart icon." className="cart icon" src={cart} /> 
                    </div>
                </Col>
            </Row>
            <Row className="mt-2 d-none d-xl-block d-lg-block d-md-block d-sm-block">
                <Col className="nav flex-column flex-sm-row">
                    <a href="#" className="flex-sm-fill text-sm-center nav-link px-2">SALE</a>
                    <a href="#" className="flex-sm-fill text-sm-center nav-link px-2">E-SHOP</a>
                    <a href="#" className="flex-sm-fill text-sm-center nav-link px-2">LOOKBOOK</a>
                    <a href="#" className="flex-sm-fill text-sm-center nav-link px-2">CAMPAÑA</a>
                    <a href="#" className="flex-sm-fill text-sm-center nav-link px-2">LOCALES</a>
                </Col>
            </Row>
            {
                // A partir de acá esta la versión mobile del header
            }
            <Row className="d-sm-none d-md-none d-lg-none justify-content-between">
                <Col xs={4} className="nav d-sm-none d-md-none d-lg-none flex-column flex-sm-row">
                    <NavDropdown title={<img className="icon" alt="Menu Icon." src={menu}/>} className="basic-nav-dropdown navbar-collapse text-start">
                        <NavDropdown.Item href="#">SALE</NavDropdown.Item>
                        <NavDropdown.Item href="#">E-SHOP</NavDropdown.Item>
                        <NavDropdown.Item href="#">LOOKBOOK</NavDropdown.Item>
                        <NavDropdown.Item href="#">CAMPAÑA</NavDropdown.Item>
                        <NavDropdown.Item href="#">LOCALES</NavDropdown.Item>
                    </NavDropdown>
                </Col>
                <Col xs={4} className="nav d-sm-none d-md-none d-lg-none flex-column flex-sm-row">
                    <div>
                        <img className="logo" alt="La Preuve logo." src={logo}/>
                    </div>
                </Col>
                <Col xs={4} className="nav d-sm-none d-md-none d-lg-none flex-column flex-sm-row">
                    <div className="text-end">
                        <img alt="Shopping Cart icon." className="cart icon" src={cart} /> 
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}
