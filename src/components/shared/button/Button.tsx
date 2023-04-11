import "./Button.scss";

import { Component } from "react";

interface ButtonProps {
  text: string;
  className: string;
  openInNewTab: boolean;
  href: string;
}

class Button extends Component<ButtonProps> {
  render() {
    return (
      <div className={this.props.className}>
        <a
          className="main-button"
          href={this.props.href}
          target={this.props.openInNewTab ? "_blank" : ""}
          rel={"noreferrer"}
        >
          {this.props.text}
        </a>
      </div>
    );
  }
}

export { Button };
