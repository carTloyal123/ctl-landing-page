import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiTwitter,
  SiBuymeacoffee,
  SiKitsu,
  SiNpm,
  SiLastdotfm,
  SiSpotify,
  SiReddit,
  SiDevdotto,
  SiHashnode,
} from "react-icons/si";
import { type IconType } from "react-icons";

export type Link = {
  name: string;
  url: string;
  value: string;
  icon: IconType;
};

export type Links = Link[];

export const links: Links = [
  {
    name: "Discord",
    url: "https://discord.com/users/491731032106860544",
    value: "carTloyal123#4185",
    icon: SiDiscord,
  },
  {
    name: "GitHub",
    url: "https://github.com/carTloyal123",
    value: "@carTloyal123",
    icon: SiGithub,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/eywa_eth",
    value: "@carTloyal123",
    icon: SiTwitter,
  },
  {
    name: "Dev.to",
    url: "https://dev.to/carTloyal123",
    value: "@carTloyal123",
    icon: SiDevdotto,
  },
];
