import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className="site-main-menu">
        <ul>
          <li>
            <NavLink to="/">
              <span className="menu-text">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span className="menu-text">About Us</span>
            </NavLink>
          </li>
          <li className="has-children">
            <NavLink to="/services">
              <span className="menu-text">Services</span>
            </NavLink>
            <span className="menu-toggle">
              <i className="far fa-angle-down"></i>
            </span>
            <ul className="sub-menu">
              <li>
                <NavLink to="/services/peb">
                  <span className="menu-text">Pre Engineered Building</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <span className="menu-text">Warehouse</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <span className="menu-text">Metal building</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <span className="menu-text">EOT shed</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <span className="menu-text">Cold Storage</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <span className="menu-text">Mezzanine Floor</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <span className="menu-text">Industrial Shed</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <span className="menu-text">Factory Shed</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/projects">
              <span className="menu-text">Our Project</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span className="menu-text">Contact Us</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar
