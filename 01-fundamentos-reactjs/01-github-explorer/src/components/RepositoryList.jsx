import React from 'react'
import { RepositoryItem } from './RepositoryItem'
import "../styles/repositories.scss";
// https://api.github.com/orgs/rocketseat/repos
const repository = {
    name:"ufornm2",
    description:"reacts/form",
    link:"www.github.com"
}
export const RepositoryList = () => {
  
    async function fetchGithub(){
      const response = await fetch("https://api.github.com/orgs/rocketseat/repos");
      const data = await response.json();
      setRepositories(data);
      console.log(data);
    }

  const [repositories,setRepositories] = React.useState();

  React.useEffect(()=>{
    fetchGithub();
  },[]);
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
