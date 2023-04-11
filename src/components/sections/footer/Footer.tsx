import "./Footer.scss";

import { Component } from "react";
import { Fade } from "react-awesome-reveal";

import { BaseProps } from "../../../types";

interface FooterProps extends BaseProps {}

class Footer extends Component<FooterProps> {
  render() {
    return (
      <Fade duration={1000} triggerOnce={true}>
        <div className="footer-div">
          <p
            className={
              this.props.isDark ? "dark-mode footer-text" : "footer-text"
            }
          >
            The codebase for this website can be found{" "}
            <a href="https://github.com/VijoPlays/profile/tree/main">here</a>!
          </p>
        </div>
      </Fade>
    );
  }
}

export { Footer };
