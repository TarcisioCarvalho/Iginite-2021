import { Container } from "./styles"

export const TransactionsTable = () =>{
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
                    <tr>
                        <td>Desenvolvimento Web</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>28/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.000</td>
                        <td>Casa</td>
                        <td>29/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}