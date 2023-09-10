import React, { ReactNode } from "react";
import { api } from "./services/api";

export const TransactionsContext = React.createContext<TransactionsContextData>({} as TransactionsContextData);

interface transactionProps{
    id:number,
    title:string,
    amount:number,
    category:string,
    type:string,
    createdAt:string
};
type TransactionInput = Omit<transactionProps,"id" | "createdAt">;

interface TransactionProviderProps{
    children: ReactNode
};

interface TransactionsContextData{
    transactions:transactionProps[],
    createTransaction:(transaction:TransactionInput) => Promise<void>
}

export const TransactionsProvider = ({children}:TransactionProviderProps) => {
    const [transactions,setTransactions] = React.useState<transactionProps[]>([]);

    async function createTransaction(transactionInput:TransactionInput){
       const response = await api.post("/transactions",{...transactionInput,
        createdAt: new Date(),
    });
        const transaction = response.data;
        
       setTransactions([...transactions,transaction]);
    }
    React.useEffect(()=>{
        api.get("transactions")
        .then(data => {
            console.log(data.data)
            setTransactions(data.data.transactions);
        });
    },[]);

    return (<TransactionsContext.Provider value={{transactions,createTransaction}}>
                {children}
            </TransactionsContext.Provider>)
}
