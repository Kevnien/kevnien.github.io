import CONSTS from "./consts";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-100">
      <Header
        name={CONSTS.name}
        navTabs={CONSTS.navTabs}
        socialMediaLinks={CONSTS.socialMedia}
      />
      <main className="flex flex-col items-center m-8">
        <div className="intro-name-picture flex">
          <div className="intro-name flex flex-col">
            <span>Hello, I&apos;m Kevin,</span>
            <h2>Software Engineer</h2>
            <span>based in California</span>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
