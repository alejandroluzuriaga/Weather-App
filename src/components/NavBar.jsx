import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {

  return (
    <header className="header-container">
      <nav>
        <ul className="nav-links nav-active">
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? {
                      textTransform: "uppercase",
                      color: "white",
                      textDecorationLine: "underline",
                    }
                  : {};
              }}
              to="/"
            >
              <p className="navbar-element">Weather now</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? {
                      textTransform: "uppercase",
                      color: "white",
                      textDecorationLine: "underline",
                    }
                  : {};
              }}
              to="/actual-weekly"
            >
              <p className="navbar-element">This week</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? {
                      textTransform: "uppercase",
                      color: "white",
                      textDecorationLine: "underline",
                    }
                  : {};
              }}
              to="/othercities-weekly"
            >
              <p className="navbar-element">Check other cities</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar