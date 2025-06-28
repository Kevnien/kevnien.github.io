import { NavTabType, SocialMediaType } from "../consts";

type Props = {
  name: string;
  navTabs: NavTabType[];
  socialMediaLinks: SocialMediaType[];
};

export default function Header({ name, navTabs, socialMediaLinks }: Props) {
  return (
    <header className="flex w-full justify-between p-4">
      <div className="name">{name}</div>
      <nav className="flex gap-4">
        {navTabs.map((tab: NavTabType) => (
          <a key={tab.name} href={tab.href} className="nav-tab">
            {tab.name}
          </a>
        ))}
      </nav>
      <div className="social-media-links flex gap-4">
        {socialMediaLinks.map((social: SocialMediaType) => (
          <a
            key={social.name}
            href={social.href}
            className="social-media-link"
            target="_blank"
          >
            {<social.icon />}
          </a>
        ))}
      </div>
    </header>
  );
}
