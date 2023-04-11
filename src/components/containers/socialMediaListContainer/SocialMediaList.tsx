import "./SocialMediaList.scss";

import { Component } from "react";

import { SocialMedia } from "../../../types";

interface SocialMediaListProps {
  socialMedias: SocialMedia[];
}

class SocialMediaList extends Component<SocialMediaListProps> {
  render() {
    function mapSocialMediasToLine(socialMedias: SocialMedia[]) {
      return socialMedias.map((socialMedia, i) => {
        return (
          <a
            key={"socialmediaList-" + i}
            href={socialMedia.link}
            className={socialMedia.className}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={socialMedia.icon}></i>
            <span></span>
          </a>
        );
      });
    }

    return <div>{mapSocialMediasToLine(this.props.socialMedias)}</div>;
  }
}

export { SocialMediaList };
