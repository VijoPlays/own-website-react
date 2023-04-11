import "./SkillContainer.scss";

import { Component } from "react";
import { Fade } from "react-awesome-reveal";

import codingPerson from "../../../assets/lottie/codingPerson.json";
import { BaseProps, SkillBulletPoints, SoftwareSkill } from "../../../types";
import { DisplayLottie } from "../../shared/lottie/DisplayLottie";
import { SoftwareSkillList } from "./softwareSkillList/SoftwareSkillList";

interface SkillContainerProps extends BaseProps {
  softwareSkills: SoftwareSkill[];
  skillBulletPoints: SkillBulletPoints;
}

class SkillContainer extends Component<SkillContainerProps> {
  render() {
    function mapSkillBulletPointsSkillsToList(
      isDark: boolean,
      skillBulletPoints: SkillBulletPoints
    ) {
      return skillBulletPoints.skills.map((skills, i) => {
        return (
          <p
            key={"skillContainer-" + i}
            className={
              isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"
            }
          >
            {skills}
          </p>
        );
      });
    }

    return (
      <div
        className={this.props.isDark ? "dark-mode main" : "main"}
        id="skills"
      >
        <div className="skills-main-div">
          <Fade direction="left" duration={1000} triggerOnce={true}>
            <div className="skills-image-div">
              <DisplayLottie animationData={codingPerson} />
            </div>
          </Fade>
          <Fade direction="right" duration={1000} triggerOnce={true}>
            <div className="skills-text-div">
              <h1
                className={
                  this.props.isDark
                    ? "dark-mode skills-heading"
                    : "skills-heading"
                }
              >
                {"My tools"}
              </h1>
              <p
                className={
                  this.props.isDark
                    ? "dark-mode subTitle skills-text-subtitle"
                    : "subTitle skills-text-subtitle"
                }
              >
                {this.props.skillBulletPoints.subTitle}
              </p>
              <SoftwareSkillList softwareSkills={this.props.softwareSkills} />
              <div>
                {mapSkillBulletPointsSkillsToList(
                  this.props.isDark,
                  this.props.skillBulletPoints
                )}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export { SkillContainer };
