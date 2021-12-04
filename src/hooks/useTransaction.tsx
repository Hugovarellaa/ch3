import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface TransactionsProviderProps {
  children: ReactNode;
}

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createAt: string;
}

type TransactionsInput = Omit<Transaction, "id" | "createAt">;

interface TransactionsContextData {
  transactions: Transaction[];
  createTransactions: (transactions: TransactionsInput) => Promise<void>;
}

const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransactions(transactionInput: TransactionsInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
