import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import ReactModal from "react-modal";
import React from "react";
import { TransactionsContext, TransactionsProvider } from "./transactionsContext";
ReactModal.setAppElement("#root");
export function App() {
  const [isTransactionsModalOpen,setIsTransactionsModalOpen] = React.useState(false);
  function handleOpenNewTransactionModal(){
    setIsTransactionsModalOpen(true);
  };
  function handleCloseNewTransactionModal(){
    setIsTransactionsModalOpen(false);
  };
  return (
    <TransactionsProvider>
      <Header
      onOpenNewTransctionsModal ={handleOpenNewTransactionModal}
      />
      <Dashboard/>
      <NewTransactionModal
      isOpen={isTransactionsModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionsProvider>
    
  );
}

