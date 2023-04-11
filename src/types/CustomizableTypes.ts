type Proficiency = {
  stack: string;
  percentage: string;
};

type School = {
  name: string;
  logo: any;
  degree: string;
  duration: string;
  description: string;
  descriptionBullets: string[];
};

type SkillBulletPoints = {
  subTitle: string;
  skills: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
};

type SocialMedia = {
  link: string;
  className: string;
  icon: string;
};

type SoftwareSkill = {
  name: string;
  icon: string;
};

type WorkExperience = {
  company: string;
  companyLogo: NodeRequire;
  date: string;
  role: string;
  description: string;
  descriptionBullets: string[];
};

export type {
  Proficiency,
  School,
  SkillBulletPoints,
  SocialMedia,
  SoftwareSkill,
  WorkExperience,
};
