import "./WorkExperienceContainer.scss";

import { Component } from "react";
import { Fade } from "react-awesome-reveal";

import { BaseProps, WorkExperience } from "../../../types";
import ExperienceCard from "./experienceCard/ExperienceCard";

interface WorkExperienceProps extends BaseProps {
  workExperiences: WorkExperience[];
}

class WorkExperienceContainer extends Component<WorkExperienceProps> {
  render() {
    function mapWorkExperiencesToExperienceCards(
      workExperiences: WorkExperience[],
      isDark: boolean
    ) {
      return workExperiences.map((workExperience, i) => {
        return (
          <ExperienceCard
            key={"workExperienceCard-" + i}
            isDark={isDark}
            cardInfo={{
              company: workExperience.company,
              desc: workExperience.description,
              date: workExperience.date,
              companylogo: workExperience.companyLogo,
              role: workExperience.role,
              descBullets: workExperience.descriptionBullets,
            }}
          />
        );
      });
    }

    return (
      <div id="experience">
        <Fade direction="down" duration={1000} triggerOnce={true}>
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Previous professional work</h1>
              <div className="experience-cards-div">
                {mapWorkExperiencesToExperienceCards(
                  this.props.workExperiences,
                  this.props.isDark
                )}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export { WorkExperienceContainer };
