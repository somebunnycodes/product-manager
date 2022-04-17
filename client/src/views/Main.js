import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    
    const [products, setProducts] = useState([]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    return (
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <hr/>
            <ProductList removeFromDom={removeFromDom} products={products} setProducts={setProducts} />
        </div>
    )
}
export default Main;
