import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
          <div >
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <a href="#banner">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Header;
