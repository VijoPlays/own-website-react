import "./EducationContainer.scss";

import { Component } from "react";

import { BaseProps, School } from "../../../types";
import { EducationCard } from "./educationCard/EducationCard";

interface EducationContainerProps extends BaseProps {
  schools: School[];
}

class EducationContainer extends Component<EducationContainerProps> {
  render() {
    function mapSchoolsToEducationCard(schools: School[], isDark: boolean) {
      return schools.map((school, i) => {
        return (
          <EducationCard
            key={"educationCard-" + i}
            isDark={isDark}
            school={school}
          />
        );
      });
    }

    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {mapSchoolsToEducationCard(this.props.schools, this.props.isDark)}
        </div>
      </div>
    );
  }
}

export { EducationContainer };
