import { Dashboard } from "./components/Dashborard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./style/global";
import { createServer } from "miragejs";
import { useState } from "react";
import Modal from "react-modal";
import { TransactionModal } from "./components/TransactionModal";

Modal.setAppElement("#root");

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => [
      {
        id: 1,
        title: "Salario",
        amount: 3400,
        type: "deposit",
        category: "Emprego",
        createAt: new Date("2021-12-05"),
      },
      {
        id: 2,
        title: "Aluguel",
        amount: 1400,
        type: "withdraw",
        category: "Casa",
        createAt: new Date("2021-12-15"),
      },
    ]);
  },
});

export function App() {
  const [modalisOpen, setModalIsOpen] = useState(false);

  function handleModalOpen() {
    setModalIsOpen(true);
  }
  function handleModalClose() {
    setModalIsOpen(false);
  }
  return (
    <>
      <GlobalStyle />
      <Header isOpen={handleModalOpen} />
      <Dashboard />
      <TransactionModal
        modalisOpen={modalisOpen}
        onRequestClose={handleModalClose}
      />
    </>
  );
}
