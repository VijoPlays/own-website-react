import "./Header.scss";

import { Component } from "react";
import Headroom from "react-headroom";

import { BaseProps } from "../../../types";
import { ToggleSwitch } from "../toggleSwitch/ToggleSwitch";

interface HeaderProps extends BaseProps {}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <Headroom>
        <header className={this.props.isDark ? "dark-menu header" : "header"}>
          <a href="/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">Alexander 'Vijo' Ott</span>
            <span className="grey-color">/&gt;</span>
          </a>

          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            style={{ color: "white" }}
          >
            <span
              className={this.props.isDark ? "navicon navicon-dark" : "navicon"}
            ></span>
          </label>
          <ul className={this.props.isDark ? "dark-menu menu" : "menu"}>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
            <li>
              <a href="#opensource">Open Source</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
            <li>
              <a href="#0">
                <ToggleSwitch />
              </a>
            </li>
          </ul>
        </header>
      </Headroom>
    );
  }
}

export { Header };
