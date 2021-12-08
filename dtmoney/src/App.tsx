import { Dashboard } from "./components/Dashborard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { createServer, Model } from "miragejs";
import { useState } from "react";
import Modal from "react-modal";
import { TransactionModal } from "./components/TransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";

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
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1100,
          createAt: new Date("2021-02-14 11:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

export function App() {
  const [isModalOpen, setIsmodalOpen] = useState(false);

  function handleOpenModal() {
    setIsmodalOpen(true);
  }
  function handleCloseModal() {
    setIsmodalOpen(false);
  }

  return (
    <TransactionProvider>
      <GlobalStyles />
      <Header handleOpenModal={handleOpenModal} />
      <Dashboard />
      <TransactionModal
        handleCloseModal={handleCloseModal}
        isModalOpen={isModalOpen}
      />
    </TransactionProvider>
  );
}
