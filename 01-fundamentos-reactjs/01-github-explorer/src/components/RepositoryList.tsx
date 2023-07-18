import React from 'react'
import { RepositoryItem } from './RepositoryItem'
import "../styles/repositories.scss";
// https://api.github.com/orgs/rocketseat/repos

interface Repository{
  name:string;
  description:string;
  html_url:string;
}

export const RepositoryList = () => {
  
    async function fetchGithub(){
      const response = await fetch("https://api.github.com/orgs/rocketseat/repos");
      const data = await response.json();
      setRepositories(data);
      console.log(data);
    }

  const [repositories,setRepositories] = React.useState<Repository[]>([]);

  React.useEffect(()=>{
    fetchGithub();
  },[]);
  return (
    <section className="repository-list">
        <h1>Lista de Repositórios</h1>
        <ul>
            {repositories.map(rep =>{
              return <RepositoryItem key={rep.name} repository={rep}/>
            })}
           
        </ul>
    </section>
    
  )
}
