import React from "react"
import logo from "../images/logo.png"
import { IoIosAdd } from "react-icons/io"
import "./styles/Header.css"

const Header = () => {
  return (
    <header>
      <img src={logo} alt='logo' />
      <h2>Memories</h2>

      <button data-bs-toggle='modal' data-bs-target='#postModal'>
        <IoIosAdd height={"1.1em"} width={"1.1em"} />
      </button>
    </header>
  )
}

export default Header
