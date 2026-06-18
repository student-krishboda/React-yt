import React from 'react'
import style from "../Header/Header.module.css"

const Header = () => {
  return (
    <div className={style.Header}>
        <h2>Sheriyans</h2>
        <button>Login</button>
    </div>
  )
}

export default Header