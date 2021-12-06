import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";
import { useState } from "react";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer de website",
          amount: 2900,
          type: "deposit",
          category: "Dev",
          createAt: new Date("2021-12-06 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 1200,
          type: "withdraw",
          category: "Casa",
          createAt: new Date("2021-12-08 11:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
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
      <NewTransactionModal
        onOpen={isModalOpen}
        onRequestClose={handleIsModalClose}
      />
    </>
  );
}
