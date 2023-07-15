import React from 'react'
import { RepositoryItem } from './RepositoryItem'
import "../styles/repositories.scss";

const repository = {
    name:"ufornm2",
    description:"reacts/form",
    link:"www.github.com"
}
export const RepositoryList = () => {
  const [repositorie,setRepositories] = React.useState();
  return (
    <section className="repository-list">
        <h1>Lista de Repositórios</h1>
        <ul>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem/>
        </ul>
    </section>
    
  )
}
