import React from 'react'
import logo from "../../assets/Logo.svg";

export const Header = () => {
  return (
   <header>
    <img src={logo} alt="Dt Money" />
    <button type="button">
      Nova Transação
    </button>
   </header>
  )
}
