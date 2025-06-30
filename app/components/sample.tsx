import Image from "next/image";
import { SampleType } from "../consts";

export default function Sample({ sample }: { sample: SampleType }) {
  return (
    <div className="sample flex flex-col">
      <Image
        src={sample.thumbnailSrc}
        alt={sample.alt}
        width={560}
        height={400}
      />
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
