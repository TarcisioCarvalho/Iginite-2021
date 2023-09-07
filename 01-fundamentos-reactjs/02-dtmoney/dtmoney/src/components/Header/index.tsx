import React from 'react'
import logo from "../../assets/Logo.svg";
import { Container, Content } from './styles';
interface HeaderProps {
  onOpenNewTransctionsModal():void;
}
export const Header = ({onOpenNewTransctionsModal}:HeaderProps) => {
  return (
   <Container>
    <Content>
      <img src={logo} alt="Dt Money" />
      <button type="button"
      onClick={onOpenNewTransctionsModal}
      >
        Nova Transação
      </button>
    </Content>
   </Container>
  )
}
