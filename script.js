// Abri e fecha Modal
function toggleModal() {
  document.querySelector(".modal-overlay").classList.toggle("active");
}

const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];
  },

  set(transactions) {
    localStorage.setItem(
      "dev.finances:transactions",
      JSON.stringify(transactions)
    );
  },
};

const Transactions = {
  all: Storage.get(),

  //somar as entradas
  depositDisplay() {
    let deposit = 0;

    Transactions.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        deposit += transaction.amount;
      }
    });

    return deposit;
  },

  //somar as saídas
  withdrawDisplay() {
    let withdraw = 0;

    Transactions.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        withdraw += transaction.amount;
      }
    });

    return withdraw;
  },

  //entradas - saídas
  totalDisplay() {
    return Transactions.depositDisplay() + Transactions.withdrawDisplay();
  },

  //Adicionar Transação
  add(transaction) {
    Transactions.all.push(transaction);
    App.reload();
  },
  //Remove Transação
  remove(index) {
    Transactions.all.splice(index, 1);

    App.reload();
  },
};

//criação do HTML
const data = {
  transactionsContainer: document.querySelector("#data-table tbody"),

  //Adicionar tabela de transação
  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = data.innerHTMLTransactions(transaction, index);
    tr.dataset.index = index;

    data.transactionsContainer.appendChild(tr);
  },
  //Base html para o javascript adicionar as transação
  innerHTMLTransactions(transaction, index) {
    const CssClass = transaction.amount > 0 ? "deposit" : "withdraw";
    const amount = ultis.formatCurrent(transaction.amount);

    const html = `
        <td>${transaction.description}</td>
        <td class="${CssClass}">${amount}</td>
        <td>${transaction.date}</td>
        <td>
          <img onclick="Transactions.remove(${index})" src="./assets/minus.svg" alt="Remover transação" />
        </td>
    `;
    return html;
  },
  //atualizar e formatação dos valores no header
  updateBalance() {
    const deposit = document.querySelector("#depositDisplay");
    const withdraw = document.querySelector("#withdrawDisplay");
    const total = document.querySelector("#totalDisplay");

    deposit.innerHTML = ultis.formatCurrent(Transactions.depositDisplay());
    withdraw.innerHTML = ultis.formatCurrent(Transactions.withdrawDisplay());
    total.innerHTML = ultis.formatCurrent(Transactions.totalDisplay());
  },

  clearTransaction() {
    data.transactionsContainer.innerHTML = "";
  },
};

const ultis = {
  //formatação para moeda Brasileira
  formatCurrent(value) {
    // const signal = Number(value) < 0 ? "-" : "";
    value = Number(value) / 100;
    value = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return value;
  },

  formatAmount(value) {
    value = Number(value) * 100;

    return value;
  },

  formatDate(date) {
    const splittedDate = date.split("-");
    const day = splittedDate[2];
    const month = splittedDate[1];
    const year = splittedDate[0];
    return `${day}/${month}/${year}`;
  },
};

const Form = {
  description: document.querySelector("input#description"),
  amount: document.querySelector("input#amount"),
  date: document.querySelector("input#date"),

  getValues() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value,
    };
  },

  validateField() {
    const { description, amount, date } = Form.getValues();
    if (
      description.trim() === "" ||
      amount.trim() === "" ||
      date.trim() === ""
    ) {
      throw new Error("Por favor preencha todos os dados");
    }
  },
  formatData() {
    let { description, amount, date } = Form.getValues();
    amount = ultis.formatAmount(amount);
    date = ultis.formatDate(date);

    return {
      description,
      amount,
      date,
    };
  },

  clearField() {
    Form.description.value = "";
    Form.amount.value = "";
    Form.date.value = "";
  },

  submit(event) {
    event.preventDefault();

    try {
      //Verifica se os campos estao preenchidos
      Form.validateField();

      //Formatar os dados
      const transaction = Form.formatData();

      //Salvar os dados
      Transactions.add(transaction);

      //Limpar o modal
      Form.clearField();

      //Fecha o modal
      toggleModal();

      //Atualizar a aplicação
    } catch (error) {
      alert(error.message);
    }
  },
};

const App = {
  init() {
    //coloca os elementos em tela
    Transactions.all.forEach((transaction, index) => {
      data.addTransaction(transaction, index);
      data.updateBalance();
    });
    Storage.set(Transactions.all);
  },

  reload() {
    data.clearTransaction();
    App.init();
  },
};

App.init();
App.reload();
