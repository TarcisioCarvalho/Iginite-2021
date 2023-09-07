import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import ReactModal from "react-modal";
import React from "react";
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
    <>
      <Header
      onOpenNewTransctionsModal ={handleOpenNewTransactionModal}
      />
      <Dashboard/>
      <ReactModal
      isOpen={isTransactionsModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      >
        Nova Transação
      </ReactModal>
      <GlobalStyle/>
    </>
    
  );
}

