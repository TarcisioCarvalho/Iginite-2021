import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';
import { convertTypeAcquisitionFromJson } from 'typescript';
import { ProductList } from '../pages/Home/styles';

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
     const storagedCart = localStorage.getItem("@RocketShoes:cart");

     if (storagedCart) {
       return JSON.parse(storagedCart);
     }

    return [];
  });

  const addProduct = async (productId: number) => {
    
    try {
      const response  = (await api.get(`/products/${productId}`)).data as Product;
    
      const newProduct = cart.find(prod => prod.id === response.id);
      const stock = await api.get(`/stock/${productId}`);
      const stockAmount = stock.data.amount;
      const currentAmount = newProduct ? newProduct.amount : 0;
      const amount = currentAmount + 1;
      if(amount > stockAmount){
      toast.error("Quantidade solicitada fora de estoque!!!!!");
      return;
    }
      
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
      localStorage.setItem("@RocketShoes:cart",JSON.stringify(newCartList));
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
      localStorage.setItem("@RocketShoes:cart",JSON.stringify([...cart,{
        id:response.id,
        amount:1,
        image:response.image,
        title:response.title,
        price:response.price
      }]));
    };
      
      
      
      /* setCart((prevState) => {
        return prevState.map(product => {
          if(product.id !== response.id) return response;
          if(product.id === response.id) return {...product,amount:++product.amount}
        })
      }) */
    } catch {
      toast.error("Erro na adição do produto!!");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const newProduct = cart.find(prod => prod.id === productId);
      if(!newProduct) throw  Error();
      if(newProduct){
      const newCartList : Product[] = cart.filter(prod => { 
        
        if(prod.id!==productId) return prod
      })
      localStorage.setItem("@RocketShoes:cart",JSON.stringify(newCartList));
      setCart(newCartList);
    }
    } catch {
      toast.error("Erro na remoção do produto!!!!!!!@@@###");
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if(amount <= 0) return;
      const stock = await api.get(`/stock/${productId}`);
      const stockAmount = stock.data.amount;
      if(amount > stockAmount) {
        toast.error("Quantidade solicitada fora de estoque");
        return;
      }
      const newProduct = cart.find(prod => prod.id === productId);
      if(!newProduct) throw Error();
      if(newProduct){
      const newCartList : Product[] = cart.map(prod => { 
        
        if(prod.id === newProduct.id) return {
          id:prod.id,
          image:prod.image,
          title:prod.title,
          price:prod.price,
          amount: amount
        }
        return prod;
      })

      localStorage.setItem("@RocketShoes:cart",JSON.stringify(newCartList));
      setCart(newCartList);
    }
    } catch {
      toast.error("Erro na alteração de quantidade do produto");
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
