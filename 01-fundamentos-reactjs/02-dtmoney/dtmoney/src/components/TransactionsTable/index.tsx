import React from "react"
import { Container } from "./styles"
import { TransactionsContext } from "../../transactionsContext"



export const TransactionsTable = () =>{
    const {transactions} = React.useContext(TransactionsContext);
    

    

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{new Intl.NumberFormat("pt-Br",{
                                style:"currency",
                                currency:"BRL"
                            }).format(transaction.amount)}</td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat("pt-Br",{
                            }).format(new Date(transaction.createdAt))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}