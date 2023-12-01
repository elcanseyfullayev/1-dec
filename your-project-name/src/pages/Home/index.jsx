import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activeIcon, setActiveIcon] = useState(null);

  useEffect(() => {
      axios.get('https://fakestoreapi.com/products/categories')
          .then(res => setCategories(res.data))
  }, []);

  useEffect(() => {
      if (selectedCategory) {
          axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
              .then(res => setProducts(res.data))
      } else {
          axios.get('https://fakestoreapi.com/products')
              .then(res => setProducts(res.data))
      }
  }, [selectedCategory]);

  function toggleFavorite(product) {
      let isProductInFavorites = false;

      for (let i = 0; i < favorites.length; i++) {
          const favorite = favorites[i];
          if (favorite.id === product.id) {
              isProductInFavorites = true;
              break;
          }
      }

      if (isProductInFavorites) {
          const updatedFavorites = favorites.filter(favorite => favorite.id !== product.id);
          setFavorites(updatedFavorites);
          setActiveIcon(null);
      } else {
          setFavorites([...favorites, product]);
          setActiveIcon(product.id);
      }
  };

  


  return (
    <>
    <Header></Header>
    <div>
            <section id='fav'>
                
                <h2>Wishlist</h2>
                <ul>
                    {favorites.map(favorite => (
                        <li key={favorite.id}>
                            <img src={favorite.image} alt={favorite.title} />
                            <p>Title: {favorite.title}</p>
                            <p>Price: {favorite.price}</p>
                            <button onClick={() => toggleFavorite(favorite)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </section>
            <hr />
            <br />

            <div className='buttons'>
                <button onClick={() => setSelectedCategory(null)}>All</button>
                {categories.map(category => (
                    <button key={category} onClick={() => setSelectedCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>
            <div>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <div className="about">
                                <p>Title: {product.title}</p>
                                <p>Category: {product.category}</p>
                                <p>Price: {product.price}</p>
                                <i onClick={() => toggleFavorite(product)} className={`fa-solid fa-heart${activeIcon === product.id ? ' active' : ''}`}></i>
                                <Link to={"/details/"+product.id}><button>Details</button></Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
            </div>
        </div>
    <Footer></Footer>
    </>
  )
}

export default Home