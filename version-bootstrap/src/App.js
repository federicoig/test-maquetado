import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from 'react';
import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { ShopItem } from './components/ShopItem';
import { getProducts } from './services/getProducts';
import { Spinner } from './components/Spinner';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

export function App() {
  const [products, setProducts] = useState([])

  useEffect( () => {
    getProducts()
      .then( res => setProducts(res))
      .catch( err => console.error(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <Container className="mt-sm-5 mb-sm-5">
        <Row className="justify-content-sm-center">
          <Col md={3} lg={3} className="p-3 hidden-md hidden-sm">
            <Categories />
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} className="justify-content-center">
            <Row>
                {products.length ? products.map( product => <ShopItem 
                  key={product.id}
                  img={product.img}
                  title={product.name}
                  price={product.price}
                />) : <Spinner type="Oval" color="#261A2D"/> 
                }
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}