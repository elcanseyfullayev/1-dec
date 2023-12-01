import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  function handleTheme() {
    document.body.classList.toggle("dark")
  }


  return (
    <header>
      <NavLink
        className={(navData) => (navData.isActive ? "activeBtn" : "")}
        to={"/"}>
        <button>Home</button>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "activeBtn" : "")}
        to={"/contact"}>
        <button>Contact</button>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "activeBtn" : "")}
        to={"/about"}>
        <button>About</button>
      </NavLink>
      <button onClick={handleTheme}>Dark Mode</button>
    </header>
  )
}

export default Header


