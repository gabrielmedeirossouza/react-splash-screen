import { lazy } from "react";

const Home = lazy(() => import("../modules/Home").then((module) => ({ default: module.Home })));
const About = lazy(() => import("../modules/About").then((module) => ({ default: module.About })));

export const paths = [
  {
    key: "home",
    path: "/",
    element: Home,
    exact: true,
  },

  {
    key: "about",
    path: "/about",
    element: About,
  },
];
