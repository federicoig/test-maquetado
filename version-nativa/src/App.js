import { useEffect, useState } from 'react';
import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { ShopItem } from './components/ShopItem';
import { getProducts } from './services/getProducts';
import './App.scss'
import { Spinner } from './components/Spinner';
import { Footer } from './components/Footer';

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
      <section className="home-section">
        <Categories />
        <div className="item-list">
          {products.length ? products.map( product => <ShopItem 
            key={product.id}
            img={product.img}
            title={product.name}
            price={product.price}
          />) : <Spinner type="Oval" color="#261A2D"/> 
          }
        </div>
        
      </section>
      <Footer />
    </div>
  );
}