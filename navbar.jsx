import React, { Component } from "react";

//Stateless functional component: this component can also be rendered as a class

const NavBar = ({ totalCounters }) => {
    console.log('Nav bar rendered')
        return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    );
  }

export default NavBar;
