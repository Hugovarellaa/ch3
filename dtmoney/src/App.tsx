import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";
import { useState } from "react";
import Modal from "react-modal";
import { TransactionModal } from "./components/TransactionModal";
import { TransactionProvider } from "./hooks/useTransaction";

Modal.setAppElement("#root");

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freenlancer",
          amount: 5000,
          type: "deposit",
          category: "Salario",
          createAt: new Date("2021-12-05 10:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 1000,
          type: "withdraw",
          category: "Casa",
          createAt: new Date("2021-12-15 10:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", (schema) => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const response = JSON.parse(request.requestBody);
      return schema.create("transaction", response);
    });
  },
});

export function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }
  function handleCloseModal() {
    setIsOpenModal(false);
  }
  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header handleOpenModal={handleOpenModal} />
      <Dashboard />
      <TransactionModal
        isOpenModal={isOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </TransactionProvider>
  );
}
