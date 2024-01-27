import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, SetProducts] = useState([]);
    const [cart,setCart]=useState([]); 

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => SetProducts(data));
    }, [])
    const handleToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleToCart={handleToCart}
                    >
                        
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;