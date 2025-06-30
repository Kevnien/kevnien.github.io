import CONSTS from "./consts";
import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/about";
import Samples from "./components/samples";

export default function Home() {
  return (
    <div className="min-h-screen h-full bg-yellow-100">
      <Header
        name={CONSTS.name}
        navTabs={CONSTS.navTabs}
        socialMediaLinks={CONSTS.socialMedia}
      />
      <main className="flex flex-col items-center m-4 mb-8 sm:m-16 text-blue-950 gap-16">
        <Intro />
        <About />
        <Samples />
      </main>
    </div>
  );
}
