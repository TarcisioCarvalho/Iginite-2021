import ReactModal from "react-modal";
import { Container, NewTransactionModalType } from "./styles";
import closeImg from "../../assets/Botão - Fechar.svg";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg";

interface newTransactionModalProps{
    isOpen:boolean;
    onRequestClose():void;
};
export const NewTransactionModal = ({isOpen,onRequestClose}:newTransactionModalProps) =>{
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
            <Container>
                <h2>Nova Transação</h2>
                <input type="text" placeholder="Título"/>
                <input type="number" placeholder="Valor" />
                <input type="text" placeholder="Categoria" />
                <NewTransactionModalType>
                    <button>
                        <img src={incomeImg} alt="" />
                    </button>
                    <button>
                        <img src={outcomeImg} alt="" />
                    </button>
                </NewTransactionModalType>
                <button type="submit">Cadastrar</button>
            </Container>

        </ReactModal>
    )
}