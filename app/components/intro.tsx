import Image from "next/image";
import CONSTS from "../consts";

export default function Intro() {
  return (
    <section
      id="home"
      className="intro flex flex-col sm:flex-row gap-8 sm:items-stretch w-full  lg:gap-32 max-w-4xl"
    >
      <div className="intro-name flex flex-col justify-center gap-1 grow lg:grow-0">
        <span className="font-medium text-lg">Hello, I&apos;m Kevin,</span>
        <h2 className="font-extrabold text-6xl">Software</h2>
        <h2 className="font-extrabold text-6xl">Engineer</h2>
        <span className="font-medium text-lg">based in California</span>
        <div className="resume-container flex relative w-fit h-fit group hover:shadow-lg">
          <a
            className="resume-link pl-8 pr-8 p-3 rounded-md border-1 border-blue-950 w-fit z-1"
            href={CONSTS.resumeUrl}
            target="_blank"
            tabIndex={0}
          >
            Resumé
          </a>
          <div className="resume-outline absolute h-full w-full bg-yellow-200 group-hover:bg-yellow-400 translate-1 rounded-md"></div>
        </div>
      </div>
      <div className="intro-picture relative rounded-full overflow-hidden border-1 border-blue-950 aspect-square grow max-w-sm min-w-48">
        <Image
          src={CONSTS.profilePicInfo.url}
          alt={CONSTS.profilePicInfo.alt}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
