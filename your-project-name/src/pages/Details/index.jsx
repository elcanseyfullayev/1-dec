import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

function Details() {
    let { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/'+ id)
            .then(res => setProducts(res.data))
    }, []);

    return (
        <>
            <Link to={"/"}><button>Go back</button></Link>
            <ul className='cards'>
            
                    <li key={products.id}>
                        <img src={products.image} alt={products.title} />
                        <div className="about">
                            <p>Title: {products.title}</p>
                            <p>Category: {products.category}</p>
                            <p>Price: {products.price}</p>
                            <p>Description: {products.description}</p>
                        </div>
                    </li>
            </ul>
        </>
    )
}

export default Details;
