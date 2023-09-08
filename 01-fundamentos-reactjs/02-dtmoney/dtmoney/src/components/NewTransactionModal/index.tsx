import ReactModal from "react-modal";
import { Container } from "./styles";

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
            
            <Container>
                <h2>Nova Transação</h2>
                <input type="text" placeholder="Título"/>
                <input type="number" placeholder="Valor" />
                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>

        </ReactModal>
    )
}