import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const CONSTS = {
  name: "Kevin Nguyen",
  navTabs: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Samples", href: "#samples" },
  ],
  socialMedia: [
    { name: "GitHub", href: "https://github.com/kevnien", icon: FaGithub },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/kevin-nguyen-835470b9",
      icon: FaLinkedin,
    },
  ],
};

export type NavTabType = {
  name: string;
  href: string;
};

export type SocialMediaType = {
  name: string;
  href: string;
  icon: IconType;
};

export default CONSTS;
