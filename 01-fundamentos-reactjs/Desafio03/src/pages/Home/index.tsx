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
  // const { addProduct, cart } = useCart();

  // const cartItemsAmount = cart.reduce((sumAmount, product) => {
  //   // TODO
  // }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      api.get("/products")
      .then(data => {
        const product:ProductFormatted ={
          id:data.data
        }
        setProducts(data.data)})
      .catch(err => {
        console.log(err);
      })
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    // TODO
  }
  
  return (
    
    <ProductList>
      {products?.map(product =>{
        return( <li>
        <img src={product.image} alt="Tênis de Caminhada Leve Confortável" />
        <strong>{product.title}</strong>
        <span>R$ 179,90</span>
        <button
          type="button"
          data-testid="add-product-button"
        // onClick={() => handleAddProduct(product.id)}
        >
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />
            {/* {cartItemsAmount[product.id] || 0} */} 2
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>)
      })}
    </ProductList>
  );
};

export default Home;
