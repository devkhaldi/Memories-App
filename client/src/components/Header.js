import React from "react"
import logo from "../images/logo.png"
import { IoIosAdd } from "react-icons/io"

const Header = () => {
  return (
    <header>
      <h2>Memories</h2>
      <img src={logo} alt='logo' />
      <button data-bs-toggle='modal' data-bs-target='#postModal'>
        <IoIosAdd />
      </button>
    </header>
  )
}

export default Header
