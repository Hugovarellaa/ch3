import { Container } from "./styles";
import incomeImg from "../../assets/income.svg"
import outcome from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"


export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1.400,00</strong>
      </div>

      <div>
        <header>
          <p>Entradas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <strong>-R$ 600,00</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 800,00</strong>
      </div>
    </Container>
  )
}