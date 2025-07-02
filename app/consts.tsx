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
      thumbnailSrc:
        "https://ucdf0fe8762c7105e52e649bfda3.previews.dropboxusercontent.com/p/thumb/ACq6HDtLbOtgOBskBRRosLwdmypLx1Zs1wBdI-_nis2EysHWugxtASXRXu4qoqXoQ9mhIt_VQRUJ3KMnEGYv5Uc-sEs4-8MaSxMtPjp2ElCYbZLxntjTCa4Zdr7ZqUGxIuq-9YUs0xxsuHi6T4o-2Rnc-_qdJzZ0slFosMwQAZ5RMn4vJUKMAiksQSnIeej5J4jOktAkeKAEdXsJrbQ2TcCogbqXHRVzUDHO9FXFhBdfJVABA56XrByQMoLySNzbHYIKHcc25KIv3g3fwjyd6EbGtC_Zh27B879wxeoOLXfVw8M9ZQlLnemVARrkhNntBYpw3pK1Dm0Q-6q28_CFI41vBwwKJ5yjL41CKqAy_7Y1AbTFZkFJQjnUJeeYPwkpIvo/p.png?is_prewarmed=true",
      alt: "newsletter section thumbnail - bullet points, email input, subscribe button, and image of newsletter contents",
      date: new Date("June 27, 2025"),
      description:
        "Want a section in your website for users to get your newsletter? This newsletter section sample is responsive between mobile, tablet, and desktop screen sizes. It also has toast messages letting the user know if their email address was successfully signed up or not. Of course, the input will validate the email address before submitting and let the user know if requirements are not met.",
    },
    {
      title: "Collections Grid",
      url: "https://kevnien.github.io/collections-grid-section/",
      thumbnailSrc:
        "https://uc3a25e76a6b39601d35ff45a139.previews.dropboxusercontent.com/p/thumb/ACql6QoEjGT4_blt7N0_bj10HJXSC5vAXRCnRlVYWyGtf8qicOczxJ1s_41PuQsOa_5Irf7XgEw-GgPndMSHos4SGveZKyYLGCiJ64Dc3xRUOSbTNrkrXCJh0CEP-sPqGr11ydHBbxXFYQq9P1IUaW9n1tg6UctkQr2cebFtTEohb7wP-TCohNSRl6JRoksnITqF4nttSPSP6yEx6HDoJWhuTxiRPxO4GXsUDckWY1-UPRhc4z9JVrWDNt15XaLYtXq92CKIBNUUXBRtkrITdm8XKW43Q2YaMyO7VayxDE6Vwbcs9IJhJLZPOIKCdbPFndb1YdwSVvzD1Vma53myCjGBnPGPgQYn2BSDgHtQvvDS8bCkyeQOpLWQCHdMAFnIFIw/p.png?is_prewarmed=true",
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
