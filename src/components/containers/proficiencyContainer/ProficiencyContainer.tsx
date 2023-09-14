import "./ProficiencyContainer.scss";

import { Component } from "react";
import { Fade } from "react-awesome-reveal";

import Build from "../../../assets/lottie/build.json";
import { Proficiency } from "../../../types";
import { DisplayLottie } from "../../shared/lottie/DisplayLottie";

interface ProficiencyContainerProps {
  proficiencies: Proficiency[];
}

class ProficiencyContainer extends Component<ProficiencyContainerProps> {
  render() {
    function mapProficiencyToProgressBar(proficiencies: Proficiency[]) {
      return proficiencies.map((experience, i) => {
        const progressStyle = {
          width: experience.percentage,
        };
        return (
          <div className="skill" key={"proficiencyProgressBar-" + i}>
            <p>{experience.stack}</p>
            <div className="meter">
              <span style={progressStyle}></span>
            </div>
          </div>
        );
      });
    }

    return (
      <Fade direction="right" duration={1000} triggerOnce={true}>
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {mapProficiencyToProgressBar(this.props.proficiencies)}
          </div>

          <div className="skills-image">
            <DisplayLottie animationData={Build} loop={true} />
          </div>
        </div>
      </Fade>
    );
  }
}

export { ProficiencyContainer };
