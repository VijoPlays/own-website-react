type Profile = {
  data: Data;
};

type Data = {
  user: User;
};

type User = {
  pinnedItems: PinnedItems;
};

type PinnedItems = {
  edges: Edge[];
};

type Edge = { node: Node };

type Node = {
  name: string;
  description: string;
  forkCount: number;
  stargazers: Stargazers;
  url: string;
  id: string;
  diskUsage: number;
  primaryLanguage: PrimaryLanguage;
};

type Stargazers = {
  totalCount: number;
};

type PrimaryLanguage = {
  name: string;
  color: string;
};

export type { Profile, Edge, Node };
