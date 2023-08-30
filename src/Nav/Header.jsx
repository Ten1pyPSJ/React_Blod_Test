import React from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";

import Home from "../Component/Home";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link to='/' >
                <a className="nav-link">home</a>
                </Link>
            </li>

            <li className="nav-item">
                <Link to='/create' >
                    <a className="nav-link">Create</a>
                </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">Авторизация</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Регистрация</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;