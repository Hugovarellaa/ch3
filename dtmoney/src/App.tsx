import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from "miragejs";
import { useState } from "react";
import Modal from "react-modal";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => [
      {
        id: 1,
        title: "Transaction 1",
        type: "deposit",
        amount: 400,
        category: "Food",
        createAt: new Date("2021-12-04"),
      },
    ]);
  },
});

Modal.setAppElement("#root");

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleIsModalOpen() {
    setIsModalOpen(true);
  }

  function handleIsModalClose() {
    setIsModalOpen(false);
  }
  return (
    <>
      <GlobalStyle />
      <Header onOpen={handleIsModalOpen} />
      <Dashboard />
      <Modal isOpen={isModalOpen} onRequestClose={handleIsModalClose}>
        <h2>Cadastrar transaçào</h2>
      </Modal>
    </>
  );
}
