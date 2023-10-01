import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
   const [products, setProducts] = useState<ProductFormatted[]>([]);
   const { addProduct, cart } = useCart();

   const cartItemsAmount = cart.reduce((sumAmount, product) => {
  if(sumAmount[product.id]) sumAmount[product.id] +=1;
  if(!sumAmount[product.id]) sumAmount[product.id] = 1;
    return sumAmount;
   }, {} as CartItemsAmount)

   //console.log(cartItemsAmount);
  useEffect(() => {
    async function loadProducts() {
      api.get("/products")
      .then(data => {
        const productsFormatted:ProductFormatted[] = data.data.map(product => {
          return{...product,
            priceFormatted:formatPrice(product.price)
          }
        });
        
        setProducts(productsFormatted)})
      .catch(err => {
        console.log(err);
      })
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    addProduct(id);
  }
  
  return (
    
    <ProductList>
      {products?.map(product =>{
        return( <li key={product.id}>
        <img src={product.image} alt={product.title} />
        <strong>{product.title}</strong>
        <span>{product.priceFormatted}</span>
        <button
          type="button"
          data-testid="add-product-button"
         onClick={() => handleAddProduct(product.id)}
        >
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />
             {cartItemsAmount[product.id] || 0} 
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>)
      })}
    </ProductList>
  );
};

export default Home;
