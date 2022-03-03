import Forks from "../Components/Forks/Forks";
import Repos from "../Components/Repos/Repos";

export const REPOS_PAGES = "/";
export const FORKS_PAGES = "/forks";

export const pages = [
  { id: 1, path: REPOS_PAGES, Component: Repos, name: "repasitories" },
  { id: 2, path: FORKS_PAGES, Component: Forks, name: "my forks" },
];
