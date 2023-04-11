import "./GithubProjectContainer.scss";

import { Component, Suspense } from "react";

import { githubLink } from "../../../Customization";
import { BaseProps, Edge } from "../../../types";
import { Button } from "../../shared/button/Button";
import { GithubRepoCard } from "./githubRepoCard";

interface GithubProjectContainerProps extends BaseProps {
  projects: Edge[];
}

class GithubProjectContainer extends Component<GithubProjectContainerProps> {
  render() {
    function mapGithubProjectsToRepoCards(isDark: boolean, projects: Edge[]) {
      return projects.map((project) => {
        return (
          <GithubRepoCard
            repo={project.node}
            key={project.node.id}
            isDark={isDark}
          />
        );
      });
    }

    return (
      <Suspense fallback={<></>}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {mapGithubProjectsToRepoCards(
              this.props.isDark,
              this.props.projects
            )}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={githubLink}
            openInNewTab={true}
          />
        </div>
      </Suspense>
    );
  }
}

export { GithubProjectContainer };
