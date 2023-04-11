import "./MainView.scss";

import axios from "axios";
import { useEffect, useState } from "react";

import profile from "../assets/data/profile.json";
import {
  EducationContainer,
  Footer,
  GithubProfileContainer,
  GithubProjectContainer,
  GoToTopButton,
  GreetingContainer,
  Header,
  LoadScreen,
  ProficiencyContainer,
  SkillContainer,
  WorkExperienceContainer,
} from "../components";
import { StyleProvider } from "../contexts/StyleContext";
import {
  greeting,
  loadAnimationDuration,
  proficiencies,
  schools,
  skillBulletPoints,
  socialMedias,
  softwareSkills,
  workExperiences,
} from "../Customization";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Profile } from "../types";

const MainView = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(
      () => setIsShowingSplashAnimation(false),
      loadAnimationDuration
    );
    return () => {
      clearTimeout(splashTimer);
    };
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  //Retrieve Github profile
  const [githubProfile, setGithubProfile] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/vijoplays")
      .then(function (response) {
        setGithubProfile(response.data);
      });
  }, []);

  const githubProjectsProfile: Profile = profile;

  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation ? (
          <LoadScreen isDark={isDark} />
        ) : (
          <>
            <Header isDark={isDark} />
            <GreetingContainer
              isDark={isDark}
              socialMedias={socialMedias}
              greeting={greeting}
            />
            <SkillContainer
              isDark={isDark}
              softwareSkills={softwareSkills}
              skillBulletPoints={skillBulletPoints}
            />
            <ProficiencyContainer proficiencies={proficiencies} />
            <WorkExperienceContainer
              isDark={isDark}
              workExperiences={workExperiences}
            />
            <EducationContainer isDark={isDark} schools={schools} />
            <GithubProjectContainer
              isDark={isDark}
              projects={githubProjectsProfile.data.user.pinnedItems.edges}
            />
            <GithubProfileContainer
              socialMedias={socialMedias}
              profile={githubProfile}
            />
            <Footer isDark={isDark} />
            <GoToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export { MainView };
