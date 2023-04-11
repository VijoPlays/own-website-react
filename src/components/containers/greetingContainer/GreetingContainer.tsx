import "./GreetingContainer.scss";

import { Component } from "react";
import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";

import landingPerson from "../../../assets/lottie/landingPerson.json";
import { BaseProps, SocialMedia } from "../../../types";
import { Button } from "../../shared/button/Button";
import { DisplayLottie } from "../../shared/lottie/DisplayLottie";
import { SocialMediaList } from "../socialMediaListContainer/SocialMediaList";

interface GreetingContainerProps extends BaseProps {
  socialMedias: SocialMedia[];
  greeting: String;
}

class GreetingContainer extends Component<GreetingContainerProps> {
  render() {
    return (
      <Fade direction="down" duration={1000} delay={-1000} triggerOnce={true}>
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <h1
                  className={
                    this.props.isDark
                      ? "dark-mode greeting-text-p"
                      : "greeting-text-p"
                  }
                >
                  Salut, I'm Alexander 'Vijo' Ott
                  <span className="wave-emoji">{emoji("👋")}</span>
                </h1>
                <p
                  className={
                    this.props.isDark
                      ? "dark-mode greeting-text-p"
                      : "greeting-text-p subTitle"
                  }
                >
                  {this.props.greeting}
                </p>
                <SocialMediaList socialMedias={this.props.socialMedias} />
                <div className="button-greeting-div">
                  <Button
                    text="Contact me"
                    href="#contact"
                    className={"greeting-button-contact"}
                    openInNewTab={false}
                  />
                  <Button
                    text="See my resume"
                    href={"https://www.linkedin.com/in/alexandervijoott/"}
                    className={"greeting-button-resume"}
                    openInNewTab={true}
                  />
                </div>
              </div>
            </div>
            <div className="greeting-image-div">
              <DisplayLottie animationData={landingPerson} />
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export { GreetingContainer };
