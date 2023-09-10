import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { Model, createServer } from 'miragejs';

createServer({
  models:{
    transaction:Model
  },
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:"Freeelancer Web Site",
          type:"deposit",
          amount:6000,
          category:"Dev",
          createdAt:new Date("2021-10-10 09:00:00")
        },
        {
          id:2,
          title:"Aluguel",
          type:"withdraw",
          amount:1000,
          category:"Casa",
          createdAt:new Date("2021-11-10 10:00:00")
        }
      ]
    })
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions",() => {
      console.log(this.schema.all("transaction"));
     return this.schema.all("transaction");
    })
    this.post("/transactions",(schema,request) =>{
      const data = JSON.parse(request.requestBody);
      schema.create("transaction",data);
      return data;
    })
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

