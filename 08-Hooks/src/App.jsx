import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10);
  const [userName, setUserName] = useState("Vraj")

  function changeNum() {
    setNum(30)
    setUserName("krish")
  }

  return (
    <div>
      <h2>Value of num is {num} <br/> Value of User is {userName}</h2>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App