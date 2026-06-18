import React from 'react'

const App = () => {

  function btnClick () {
    console.log("Button was clicked");
  }

  return (
    <div>
      <button onClick={btnClick}>Click Here</button>
    </div>
  )
}

export default App