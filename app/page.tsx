"use client";
import CONSTS, { SampleType } from "./consts";
import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/about";
import Samples from "./components/samples";
import { useEffect, useState } from "react";

export default function Home() {
  const [samples, setSamples] = useState<SampleType[]>([]);
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "bearer e59f4db6fe38fcffdb1e9df89d0dd6fe3439d7d87493cf907f4271928b2b6a0d5fc56e59cf8bfbe2a42a49cdb24c24e4535d3e63cf29f7508f9913676a9e360b0883e601995984d1667bbcef892c02909703c56f4b81264dd4932a09b34a01764b6528829c53b6fd7f028dac672b4522fb180d89bb1d64d9582fe592803a3db5",
    },
  };
  useEffect(() => {
    fetch(
      "https://efficient-horse-b504382514.strapiapp.com/api/website-samples",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setSamples(data);
        console.log(data);
      })
      .catch((error) => console.error(error));

    return () => console.log("Component unmounted.");
  }, []);

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
