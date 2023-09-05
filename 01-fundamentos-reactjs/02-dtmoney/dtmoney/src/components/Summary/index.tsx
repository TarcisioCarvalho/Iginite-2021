import entradas from "../../assets/Entradas.svg";
import saidas from "../../assets/Saídas.svg";
import total from "../../assets/Total.svg";
import { Container } from "./styles"

export const Summary = () =>{
    return (
        <Container>
            <div>
                <header>
                    <p></p>
                    <img src={entradas} alt="Entradas" />
                </header>
                <strong>1000,00 R$</strong>
            </div>
            <div>
                <header>
                    <p></p>
                    <img src={saidas} alt="Saidas" />
                </header>
                <strong>-500,00 R$</strong>
            </div>
            <div className="hightlight-background">
                <header>
                    <p></p>
                    <img src={total} alt="Total" />
                </header>
                <strong>500,00 R$</strong>
            </div>
        </Container>
    )
}