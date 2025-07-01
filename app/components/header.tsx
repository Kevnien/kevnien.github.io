import Link from "next/link";
import { NavTabType, SocialMediaType } from "../consts";

type Props = {
  name: string;
  navTabs: NavTabType[];
  socialMediaLinks: SocialMediaType[];
};

export default function Header({ name, navTabs, socialMediaLinks }: Props) {
  return (
    <header className="flex flex-col sm:flex-row gap-8 w-full justify-between p-8 pl-16 pr-16 text-blue-950 items-center">
      <div className="name font-semibold text-lg">{name}</div>
      <nav className="flex gap-12 text-sm font-normal">
        {navTabs.map((tab: NavTabType) => (
          <Link key={tab.name} href={tab.href} className="nav-tab" tabIndex={1}>
            {tab.name}
          </Link>
        ))}
      </nav>
      <div className="social-media-links flex gap-6">
        {socialMediaLinks.map((social: SocialMediaType) => (
          <a
            key={social.name}
            href={social.href}
            className="social-media-link"
            target="_blank"
            tabIndex={0}
          >
            {<social.icon size={18} />}
          </a>
        ))}
      </div>
    </header>
  );
}
