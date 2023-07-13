import React from 'react'

export const Counter = () => {
    const [counter,setCounter] = React.useState(0);
    function handleClick(){
        setCounter(counter+1);
    }
  return (
    <>
        <p>{counter}</p>
        <button onClick={handleClick}>Incrementar</button>
    </>
  )
}
