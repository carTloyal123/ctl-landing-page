import { FC, CSSProperties, FunctionComponent } from "react";
import LinkedIn from "./linkedin.svg";
import DevTo from "./dev-to.svg";
import Instagram from "./instagram.svg";
import Facebook from "./facebook.svg";
import GitHub from "./github.svg";
import LeetCode from "./leetcode.svg";
import GFG from "./GeeksforGeeks.svg";
import Eye from "./eye.svg";
import HackerRank from "./hackerrank.svg";
import Moon from "./moon.svg";
import Sun from "./sun.svg";
import TopRightSVG from "./top-right.svg";

type Props = {
    className? : string,
    style?: CSSProperties
}

const icons: Record<string, FunctionComponent<Props>> =  {LinkedIn, DevTo, Instagram, Facebook, GitHub, LeetCode, GFG, Eye, HackerRank, Moon, Sun, TopRightSVG }

export default icons;