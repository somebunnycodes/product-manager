import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    const {removeFromDom, products, setProducts} = props;
    const deleteProduct = (productId) =>{
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            {
                products.map((product, index)=>
                    <div key={index}>
                        <p>Title: <Link to={`/products/${product._id}`}>{product.title}</Link></p> 
                        <p>Price: {product.price}</p> 
                        <p>Description: {product.description}</p>
                        <Link to={"/products/edit/" + product._id}>
                            Edit
                        </Link>
                        
                        <button onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button>
                        <hr/>
                    </div>
                    
                )
            }
        </div>
    )
}
export default ProductList;

