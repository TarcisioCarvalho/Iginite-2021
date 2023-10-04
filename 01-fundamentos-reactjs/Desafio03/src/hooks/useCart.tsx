import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';
import { convertTypeAcquisitionFromJson } from 'typescript';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    // const storagedCart = Buscar dados do localStorage

    // if (storagedCart) {
    //   return JSON.parse(storagedCart);
    // }

    return [];
  });

  const addProduct = async (productId: number) => {
    
    try {
      const response  = (await api.get(`/products/${productId}`)).data as Product;
    
      const newProduct = cart.find(prod => prod.id === response.id);
      if(newProduct){
      const newCartList : Product[] = cart.map(prod => { 
        
        if(prod.id === newProduct.id) return {
          id:prod.id,
          image:prod.image,
          title:prod.title,
          price:prod.price,
          amount: ++prod.amount
        }
        return prod;
      })

     
      setCart(newCartList);
    }

    if(!newProduct) {
      
      setCart([...cart,{
        id:response.id,
        amount:1,
        image:response.image,
        title:response.title,
        price:response.price
      }]);
    
    };
      
      
      
      /* setCart((prevState) => {
        return prevState.map(product => {
          if(product.id !== response.id) return response;
          if(product.id === response.id) return {...product,amount:++product.amount}
        })
      }) */
    } catch {
      // TODO
    }
  };

  const removeProduct = (productId: number) => {
    try {
      // TODO
    } catch {
      // TODO
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      const newProduct = cart.find(prod => prod.id === productId);
      if(newProduct){
      const newCartList : Product[] = cart.map(prod => { 
        
        if(prod.id === newProduct.id) return {
          id:prod.id,
          image:prod.image,
          title:prod.title,
          price:prod.price,
          amount: ++prod.amount
        }
        return prod;
      })

     
      setCart(newCartList);
    }
    } catch {
      // TODO
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
