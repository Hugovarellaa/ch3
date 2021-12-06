import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api
      .get("http://localhost:3000/api/transactions")
      .then((response) => console.log(response.data));
  }, []);

  return (
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
            <td>Freelancer de Website</td>
            <td className="deposit">R$ 1.200,00</td>
            <td>Dev</td>
            <td>04/12/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$ 600,00</td>
            <td>Casa</td>
            <td>10/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
