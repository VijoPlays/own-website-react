import "./EducationCard.scss";

import { Component } from "react";
import { Fade, Slide } from "react-awesome-reveal";

import { BaseProps, School } from "../../../../types";

interface EducationCardProps extends BaseProps {
  school: School;
}

class EducationCard extends Component<EducationCardProps> {
  render() {
    function mapDescriptionBulletsToList(descriptionBullets: string[]) {
      return descriptionBullets.map((bulletItem, i) => (
        <li className="subTitle" key={"educationCardDescriptionBullet-" + i}>
          {bulletItem}
        </li>
      ));
    }

    return (
      <div>
        <Fade direction="left" duration={1000} triggerOnce={true}>
          <div className="education-card">
            {this.props.school.logo && (
              <div className="education-card-left">
                <img
                  crossOrigin={"anonymous"}
                  className="education-roundedimg"
                  src={this.props.school.logo}
                  alt={this.props.school.name}
                />
              </div>
            )}
            <div className="education-card-right">
              <h5 className="education-text-school">
                {this.props.school.name}
              </h5>

              <div className="education-text-details">
                <h5
                  className={
                    this.props.isDark
                      ? "dark-mode education-text-subHeader"
                      : "education-text-subHeader"
                  }
                >
                  {this.props.school.degree}
                </h5>
                <p
                  className={`${
                    this.props.isDark ? "dark-mode" : ""
                  } education-text-duration`}
                >
                  {this.props.school.duration}
                </p>
                <p className="education-text-desc">
                  {this.props.school.description}
                </p>
                <div className="education-text-bullets">
                  <ul>
                    {mapDescriptionBulletsToList(
                      this.props.school.descriptionBullets
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Slide direction="left" duration={2000} triggerOnce={true}>
          <div className="education-card-border"></div>
        </Slide>
      </div>
    );
  }
}

export { EducationCard };
