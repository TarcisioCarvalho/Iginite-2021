import ReactModal from "react-modal";
import { Container, NewTransactionModalType, RadioBox } from "./styles";
import closeImg from "../../assets/Botão - Fechar.svg";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg";
import React, { FormEvent } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../transactionsContext";

interface newTransactionModalProps{
    isOpen:boolean;
    onRequestClose():void;
};
export const NewTransactionModal = ({isOpen,onRequestClose}:newTransactionModalProps) =>{
    const [type,setType] = React.useState("deposit");
    const [title,setTitle] = React.useState("");
    const [amount,setAmount] = React.useState(0);
    const [category,setCategory] = React.useState("");
    const {createTransaction} = React.useContext(TransactionsContext);

    async function handleSubmit(event:FormEvent){
        event.preventDefault();
        const body = {
        title,
        amount,
        category,
        type
        };
        console.log(body);
       await createTransaction(body);

        setTitle("");
        setType("deposit");
        setAmount(0);
        setCategory("");
       onRequestClose();
    }
    return(
        <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={"react-modal-overlay"}
        className={"react-modal-content"}
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Botão de fechar" />
            </button>
            <Container
            onSubmit={handleSubmit}
            >
                <h2>Nova Transação</h2>
                <input type="text" 
                placeholder="Título"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                />
                <input type="number"
                 placeholder="Valor" 
                value={amount}
                onChange={(event) => setAmount(Number(event.target.value))}
                 />
                <input type="text"
                 placeholder="Categoria" 
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                 />
                <NewTransactionModalType>
                    <RadioBox
                    type="button"
                    isActive={type==="deposit"}
                    activeColor="green"
                    onClick={() => setType("deposit")}
                    >
                        <img src={incomeImg} alt="" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                    type="button"
                    isActive={type==="withdraw"}
                    activeColor="red"
                    onClick={() => setType("withdraw")}
                    >
                        <img src={outcomeImg} alt="" />
                        <span>Saída</span>
                    </RadioBox>
                </NewTransactionModalType>
                <button type="submit">Cadastrar</button>
            </Container>

        </ReactModal>
    )
}