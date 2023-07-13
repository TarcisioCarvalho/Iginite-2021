import React from 'react'
import { RepositoryItem } from './RepositoryItem'
import { Counter } from './Counter'
const repository = {
    name:"ufornm2",
    description:"reacts/form",
    link:"www.github.com"
}
export const RepositoryList = () => {

  return (
    <section className="repository-list">
        <h1>Lista de Repositórios</h1>
        <ul>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem/>
        </ul>
        <Counter/>
    </section>
    
  )
}
