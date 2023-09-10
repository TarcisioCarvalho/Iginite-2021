import React from "react";
import entradas from "../../assets/Entradas.svg";
import saidas from "../../assets/Saídas.svg";
import total from "../../assets/Total.svg";
import { Container } from "./styles"
import { TransactionsContext } from "../../transactionsContext";

export const Summary = () =>{
    const {transactions} = React.useContext(TransactionsContext);

    const summary = transactions.reduce((acc,transaction) => {
        if(transaction.type === "deposit"){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }
        if(transaction.type === "withdraw"){
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc
    },{
        deposits:0,
        withdraws:0,
        total:0
    });

    return (
        <Container>
            <div>
                <header>
                    <p></p>
                    <img src={entradas} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat("pt-Br",{
                                style:"currency",
                                currency:"BRL"
                            }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p></p>
                    <img src={saidas} alt="Saidas" />
                </header>
                <strong>-{new Intl.NumberFormat("pt-Br",{
                                style:"currency",
                                currency:"BRL"
                            }).format(summary.withdraws)}</strong>
            </div>
            <div className="hightlight-background">
                <header>
                    <p></p>
                    <img src={total} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat("pt-Br",{
                                style:"currency",
                                currency:"BRL"
                            }).format(summary.total)}</strong>
            </div>
        </Container>
    )
}