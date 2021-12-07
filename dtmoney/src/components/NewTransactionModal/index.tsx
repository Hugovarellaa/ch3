import Modal from "react-modal";
import { Container, Content, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeIgm from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { useTransaction } from "../hooks/useTransaction";

interface ModalProps {
  onOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ onOpen, onRequestClose }: ModalProps) {
  const { createTransaction } = useTransaction();
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      amount,
      category,
      title,
      type,
    });
    onRequestClose();
    setType("deposit");
    setTitle("");
    setCategory("");
    setAmount(0);
  }

  return (
    <Modal
      isOpen={onOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" className="closeImg" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transaçào</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <Content>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeIgm} alt="Entradas" />
            <span>Entradas</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcome} alt="Saídas" />
            <span>Entradas</span>
          </RadioBox>
        </Content>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
