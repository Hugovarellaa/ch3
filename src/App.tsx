import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from "miragejs";
import Modal from "react-modal";
import { useState } from "react";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => [
      {
        id: 1,
        title: "Desenvolvimento",
        amount: 2400,
        type: "deposit",
        categories: "Food",
        createAt: new Date(),
      },
      {
        id: 2,
        title: "Aluguel",
        amount: 1100,
        type: "withdraw",
        categories: "Casa",
        createAt: new Date(),
      },
    ]);
  },
});

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] =
    useState(false);

  function handleNewTransactionsModalOpen() {
    setIsNewTransactionsModalOpen(true);
  }

  function handleNewTransactionsModalClose() {
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleNewTransactionsModalOpen} />
      <Dashboard />
      <GlobalStyle />

      <Modal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleNewTransactionsModalClose}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    </>
  );
}
