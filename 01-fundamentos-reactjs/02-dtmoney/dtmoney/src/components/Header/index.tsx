import React from 'react'
import logo from "../../assets/Logo.svg";
import { Container, Content } from './styles';

export const Header = () => {
  return (
   <Container>
    <Content>
      <img src={logo} alt="Dt Money" />
      <button type="button">
        Nova Transação
      </button>
    </Content>
   </Container>
  )
}
