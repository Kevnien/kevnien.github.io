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
  resumeUrl:
    "https://cdn.discordapp.com/attachments/457421693527392287/1388944977828122635/Kevin_Nguyen_CV_FE.pdf?ex=6862d350&is=686181d0&hm=3865f392485d6a43c9602e797f72150e64295efa04e9c3df968d6a6fc3153739&",
  profilePicInfo: {
    url: "https://avatars.githubusercontent.com/u/16169867?v=4",
    alt: "Kevin's Picture",
  },
  samples: [
    {
      title: "Newsletter Section",
      url: "https://kevnien.github.io/newsletter-section/",
      thumbnailSrc:
        "https://cdn.discordapp.com/attachments/457421693527392287/1389029707529584691/Screenshot_2025-06-29_at_4.46.36_PM.png?ex=68632239&is=6861d0b9&hm=edfdbc4898699ef001f2907319342ccd6a4bfcddaeeca1d50d004ddcd022a3bf&",
      alt: "newsletter section thumbnail - bullet points, email input, subscribe button, and image of newsletter contents",
      date: new Date("June 27, 2025"),
      description:
        "Want a section in your website for users to get your newsletter? This newsletter section sample is responsive between mobile, tablet, and desktop screen sizes. It also has toast messages letting the user know if their email address was successfully signed up or not. Of course, the input will validate the email address before submitting and let the user know if requirements are not met.",
    },
    {
      title: "Collections Grid",
      url: "https://kevnien.github.io/collections-grid-section/",
      thumbnailSrc:
        "https://cdn.discordapp.com/attachments/457421693527392287/1389030343117377626/Screenshot_2025-06-29_at_4.50.23_PM.png?ex=686322d0&is=6861d150&hm=2f6a71cbf5c9aa81f486a4caace15ce9d8943aa3d668f785edf53f0773b1aba7&",
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
