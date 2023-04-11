import "./LoadScreen.css";

import { Component } from "react";

import animation from "../../../assets/lottie/splashAnimation.json";
import { BaseProps } from "../../../types";
import { DisplayLottie } from "../../shared/lottie/DisplayLottie";

interface LoadScreenProps extends BaseProps {}

class LoadScreen extends Component<LoadScreenProps> {
  render() {
    return (
      <div
        className={
          this.props.isDark ? "dark-mode splash-container" : "splash-container"
        }
      >
        <div className="splash-animation-container">
          <DisplayLottie animationData={animation} />
        </div>
        <div className="splash-title-container">
          <span className="grey-color"> &lt;</span>
          <span className="splash-title">Alexander 'Vijo' Ott</span>
          <span className="grey-color">/&gt;</span>
        </div>
      </div>
    );
  }
}

export { LoadScreen };
