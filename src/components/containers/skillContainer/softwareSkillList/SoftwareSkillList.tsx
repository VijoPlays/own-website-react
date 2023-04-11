import "./SoftwareSkillList.scss";

import { Component } from "react";

import { SoftwareSkill } from "../../../../types";

interface SoftwareSkillListProps {
  softwareSkills: SoftwareSkill[];
}

class SoftwareSkillList extends Component<SoftwareSkillListProps> {
  render() {
    function mapSoftwareSkillsToLine(softwareSkills: SoftwareSkill[]) {
      return softwareSkills.map((softwareSkill, i) => {
        return (
          <li key={"softwareSkillList-" + i} className="software-skill-inline">
            <i className={softwareSkill.icon}></i>
            <p>{softwareSkill.name}</p>
          </li>
        );
      });
    }

    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {mapSoftwareSkillsToLine(this.props.softwareSkills)}
          </ul>
        </div>
      </div>
    );
  }
}

export { SoftwareSkillList };
