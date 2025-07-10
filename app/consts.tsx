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
  resumeUrl: "/Kevin Nguyen CV FE.pdf",
  profilePicInfo: {
    url: "https://avatars.githubusercontent.com/u/16169867?v=4",
    alt: "Kevin's Picture",
  },
  samples: [
    {
      title: "Newsletter Section",
      url: "https://kevnien.github.io/newsletter-section/",
      thumbnailSrc: "/newsletter-section-thumbnail.png",
      alt: "newsletter section thumbnail - bullet points, email input, subscribe button, and image of newsletter contents",
      date: new Date("June 27, 2025"),
      description:
        "Want a section in your website for users to get your newsletter? This newsletter section sample is responsive between mobile, tablet, and desktop screen sizes. It also has toast messages letting the user know if their email address was successfully signed up or not. Of course, the input will validate the email address before submitting and let the user know if requirements are not met.",
    },
    {
      title: "Collections Grid",
      url: "https://kevnien.github.io/collections-grid-section/",
      thumbnailSrc: "/collections-grid-thumbnail.png",
      alt: "collections grid thumbnail - grid of images with titles and descriptions",
      date: new Date("June 23, 2025"),
      description:
        "Many times we need to show users multiple products at once. Here is a collections grid that will request a collection from an endpoint then display the images in a pleasant way. The tiles have hover effects that show a modern design.",
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

export type SampleType = {
  title: string;
  url: string;
  thumbnailSrc: string;
  alt: string;
  date: Date;
  description: string;
};

export default CONSTS;
