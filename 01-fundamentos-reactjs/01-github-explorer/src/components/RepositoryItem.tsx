import React from 'react'
interface RepositoryItemProps{
  repository:{
    name:string,
    description:string,
    html_url:string
  }
}
export const RepositoryItem = (props:RepositoryItemProps) => {
  return (
            <li>
                <strong>{props.repository?.name ?? "default"}</strong>
                <p>{props.repository?.description ?? "default"}</p>
                <a href={props.repository?.html_url ?? "default"}>
                    Acessar Repositório
                </a>
            </li>
  )
}
