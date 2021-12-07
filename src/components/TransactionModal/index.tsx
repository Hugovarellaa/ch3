import Modal from "react-modal";
import { Container, Content, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import outcome from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";
import { useState } from "react";

interface TransactionModalProps {
  modalisOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({
  modalisOpen,
  onRequestClose,
}: TransactionModalProps) {
  const [type, setType] = useState("withdraw");
  return (
    <Modal
      isOpen={modalisOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-container"
      className="react-modal-content"
    >
      <button type="button" className="closeImg" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <Content>
          <RadioBox
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Deposito" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={outcome} alt="Retiradas" />
            <span>Saídas</span>
          </RadioBox>
        </Content>
        <input type="text" placeholder="Categoria" />
        <button type="button">Cadastrar</button>
      </Container>
    </Modal>
  );
}
