"use client";

import Image from "next/image";
import { SampleType } from "../consts";

export default function Sample({ sample }: { sample: SampleType }) {
  const handleSampleClick = (): void => {
    window.open(sample.url, "_blank");
  };

  return (
    <div
      className="sample flex flex-col cursor-pointer w-[560px] "
      onClick={handleSampleClick}
    >
      <div className="image-container h-[400px] w-[560px] relative">
        <Image
          src={sample.thumbnailSrc}
          alt={sample.alt}
          fill
          className="object-cover"
        />
      </div>
      <p className="date text-xs italic">
        {`${sample.date.toDateString().substring(4)}`}
      </p>
      <h3 className="sample-title text-md font-bold pt-4 pb-4">
        {sample.title}
      </h3>
      <p className="sample-description text-sm">{sample.description}</p>
    </div>
  );
}
