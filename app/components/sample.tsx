"use client";

import Image from "next/image";
import { SampleType } from "../consts";

export default function Sample({ sample }: { sample: SampleType }) {
  return (
    <a
      className="sample flex flex-col cursor-pointer w-[420px] hover:ring-2 hover:ring-yellow-200 hover:shadow rounded"
      tabIndex={0}
      href={sample.url}
      target="_blank"
    >
      <div className="image-container h-[300px] w-[420px] relative">
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
    </a>
  );
}
