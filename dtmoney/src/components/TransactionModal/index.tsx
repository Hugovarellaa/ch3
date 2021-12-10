import Modal from "react-modal";
import { Container, Content, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { useTransaction } from "../../hooks/useTransaction";

interface TransactionModalProps {
  isOpenModal: boolean;
  handleCloseModal: () => void;
}

export function TransactionModal({
  isOpenModal,
  handleCloseModal,
}: TransactionModalProps) {
  const { createTransaction } = useTransaction();
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });
    setType("deposit");
    setTitle("");
    setCategory("");
    setAmount(0);
    handleCloseModal();
  }

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" className="closeImg" onClick={handleCloseModal}>
        <img src={closeImg} alt="Fecha modal" />
      </button>
      <Container onSubmit={handleSubmit}>
        <h2>Cadastrar transação</h2>
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
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
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
